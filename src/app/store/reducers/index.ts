import {ActionReducerMap, MetaReducer} from '@ngrx/store';
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


      let studentsState = [...state.students];


      let currentStudentSate = Object.assign({}, state.currentStudent);
      let currentStudentProjects = [...currentStudentSate.projects];

      currentStudentSate.projects = currentStudentProjects.filter(val => val !== action.payload.projectId);

      studentsState = studentsState.map((student: Student) => {
        if (student.id === currentStudentSate.id) {
          return currentStudentSate;
        }
        return student;
      });

      return {
        ...state,
        students: studentsState,
        currentStudent: currentStudentSate
      };

    case StudentsActionTypes.EngageProject: {
      let studentsState = [...state.students];

      const currentStudentSate = Object.assign({}, state.currentStudent);

      const currentStudentProjectsSate = [...state.currentStudent.projects];
      currentStudentProjectsSate.push(+action.payload.projectId)


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
      }
    }

    case ProjectsActionTypes.DeleteProject: {
      return {
        ...state,
        projects: [...state.projects].filter((project: Project) => project.id !== action.payload.projectId )
      }
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


export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
