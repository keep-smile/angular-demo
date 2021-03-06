import {ActionReducerMap, MetaReducer, select} from '@ngrx/store';
import {environment} from '../../../environments/environment';


import {StudentsAction, StudentsActionTypes} from '../actions/students.actions';

import {Student} from '../../core/model/student';
import {Project} from '../../core/model/project';
import {ProjectsAction, ProjectsActionTypes} from '../actions/projects.actions';

export interface StudentsState {
  currentStudent: Student | null;
  students: Student[] | null;
  error: string | null;
}

const initialStudentsState: StudentsState = {
  currentStudent: null,
  students: null,
  error: null
};

export interface ProjectsState {
  projects: Project[] | null;
  currentProject: Project | null;
  error: string | null;
}

const initialProjectsState: ProjectsState = {
  projects: null,
  currentProject: null,
  error: null
};

export interface AppState {
  students: StudentsState;
  projects: ProjectsState;
}

export function studentsReducer(state: StudentsState = initialStudentsState, action: StudentsAction): StudentsState {
  switch (action.type) {
    case StudentsActionTypes.LoadStudentsSuccess:

      return {
        ...state,
        students: action.payload.students
      };

    case StudentsActionTypes.LoadStudentsError:

      return {
        ...state,
        students: [],
        error: action.payload.error
      };

    case StudentsActionTypes.UnEngageProject:

      let currentStudentState: Student | null
      let studentsState = [...state.students];
      let studentId: number;

      if(action.payload.studentId){
        currentStudentState = null
        studentId = action.payload.studentId;
      } else {
        currentStudentState = Object.assign({}, state.currentStudent);
        studentId = currentStudentState.id;
        const currentStudentProjects = [...currentStudentState.projects];
        currentStudentState.projects = currentStudentProjects.filter(val => val !== action.payload.projectId);
      }

      studentsState = studentsState.map((student: Student) => {
        if (student.id === studentId) {
          return {...student, projects: student.projects.filter(v => v != action.payload.projectId)};
        }
        return student;
      });

      return {
        ...state,
        students: studentsState,
        currentStudent: currentStudentState
      };

    case StudentsActionTypes.EngageProject: {
      let studentsState = [...state.students];

      const currentStudentSate = Object.assign({}, state.currentStudent);

      const currentStudentProjectsSate = [...state.currentStudent.projects];
      currentStudentProjectsSate.push(+action.payload.projectId);


      studentsState = studentsState.map((student: Student) => {
        if (student.id === currentStudentSate.id) {
          return {...currentStudentSate, projects: currentStudentProjectsSate};
        }
        return student;
      });

      return {
        ...state,
        students: studentsState,
        currentStudent: {...currentStudentSate, projects: currentStudentProjectsSate}
      };

    }

    case StudentsActionTypes.SetCurrentStudent:

      let currentStudent: Student | null;
      if (typeof action.payload.currentStudent === 'string') {
        currentStudent = state.students.find((student: Student) => student.id === +action.payload.currentStudent);
      } else {
        currentStudent = null;
      }

      return {
        ...state,
        currentStudent
      };

    default:
      return state;
  }
}

export function projectsReducer(state: ProjectsState = initialProjectsState, action: ProjectsAction): ProjectsState {
  switch (action.type) {
    case ProjectsActionTypes.LoadProjectsSuccess:
      return {
        ...state,
        projects: action.payload.projects,
        error: null
      };

    case ProjectsActionTypes.CreateProject: {

      const projectsState = [...state.projects];
      projectsState.sort((a, b) => a < b ? 1 : -1);

      return {
        ...state,
        projects: [...state.projects, {...action.payload.project, id: projectsState[0].id + 1}]
      };
    }

    case ProjectsActionTypes.DeleteProject: {
      return {
        ...state,
        projects: [...state.projects].filter((project: Project) => project.id !== action.payload.projectId )
      };
    }

    case ProjectsActionTypes.SetCurrentProject:

      let currentProject: Project | null;
      if (typeof action.payload.currentProject === 'string') {
        currentProject = state.projects.find((project: Project) => project.id === +action.payload.currentProject);
      } else {
        currentProject = null;
      }

      return {
        ...state,
        currentProject
      };

    case ProjectsActionTypes.LoadProjectsError:
      return {
        ...state,
        projects: null,
        error: action.payload.error
      };

    default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {

  students: studentsReducer,
  projects: projectsReducer
};

export const selectStudents = (state: AppState) => {
  return state.students.students;
};

export const selectStudentsFlatten = (state: AppState) => {
  return state.students.students.map(student => {
    return {...student, projects: student.projects.map(prId => {
      const projectToName = state.projects.projects.find(pr => pr.id === prId );
      return projectToName.title;
      }).join(', ')}
  });
};

export const selectCurrentStudent = (state: AppState, projects: Project[]) => {
  return state.students.currentStudent;
};

export const selectAvailableProjects = (state: AppState): Project[] | null => {

  if (state.students.currentStudent && state.students.currentStudent.projects.length) {
    return state.projects.projects.filter(project => !state.students.currentStudent.projects.includes(project.id));
  }
  return state.projects.projects;
};

export const selectProjects = (state: AppState) => state.projects.projects;
export const selectIfStudentNotFound = (state: AppState, args: { currentStudentId: number}) => {
  if (state.students.students && state.students.students.length) {
    const badStudentFlag = !state.students.students.find(student => student.id === +args.currentStudentId);
    return badStudentFlag;
  } else {
    return false;
  }
}

export const selectIfProjectNotFound = (state: AppState, args: { currentProjectId: number}) => {
  if (state.projects.projects && state.projects.projects.length) {

    const badProjectFlag = !state.projects.projects.find(student => student.id === +args.currentProjectId);
    return badProjectFlag;
  } else {
    return false;
  }
}

export const selectProjectUsers = (state: AppState) => {

  if (state.projects.currentProject && state.projects.projects && state.projects.projects.length) {

    const currentProject = state.projects.currentProject;

    const projectStudents = state.students.students.filter(
      student => student.projects.indexOf(currentProject.id) >= 0
    );

    return {...currentProject, students: projectStudents};

  } else {
    return null;
  }
}

export const selectStudentProjects = (state: AppState) => {

  if (state.students.currentStudent && state.projects.projects && state.projects.projects.length) {

    const currentStudent = state.students.currentStudent;

    const projectsDetailed = [] as Project[];

    const projectsList = state.projects.projects;

    currentStudent.projects.forEach((projectId, index, projects) => {

      const project = projectsList.find(project => project.id === projectId);
      projectsDetailed.push(project);

    });

    return {...currentStudent, projects: projectsDetailed};

  } else {
    return null;
  }
};


export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
