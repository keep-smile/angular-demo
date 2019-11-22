import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';


import {StudentsAction, StudentsActionTypes} from '../actions/students.actions';

import {Student} from '../core/model/student';
import {Project} from '../core/model/project';
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
  error: string | null;
}

const initialProjectsState: ProjectsState = {
  projects: null,
  error: null
};

export interface AppState {
  students: StudentsState;
  projects: ProjectsState;
}

export function studentsReducer(state: StudentsState = initialStudentsState, action: StudentsAction): StudentsState {
  switch (action.type) {
    case StudentsActionTypes.LoadStudentsSuccess:

      console.log(action);

      return {
        ...state,
        students: action.payload.students
      };

    case StudentsActionTypes.LoadStudentsError:

      console.log(action);

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

    case StudentsActionTypes.SetCurrentStudent:

      let currentStudent: Student | null;
      if (typeof action.payload.currentStudent === 'string'
        && state.students[action.payload.currentStudent]
        && state.students[+action.payload.currentStudent]
      ) {
        currentStudent = state.students[+action.payload.currentStudent];
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

  console.log('selector triggered', state.students);
  return state.students.currentStudent;
};

export const selectProjects = (state: AppState) => state.projects.projects;


export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
