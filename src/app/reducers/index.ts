import { ActionReducerMap, MetaReducer, Action} from '@ngrx/store';
import { environment } from '../../environments/environment';


import { StudentsActionTypes, StudentsAction } from '../actions/students.actions';

import {Student} from '../core/model/student';
import {Project} from '../core/model/project';
import {ProjectsAction, ProjectsActionTypes} from '../actions/projects.actions';

export interface StudentsState {
  currentlySelected: number | null;
  students: Student[] | null;
  error: string| null;
}

const initialStudentsState: StudentsState = {
  currentlySelected: null,
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
    case StudentsActionTypes.LoadStudents:
      return {...state,
        students: action.payload.students
      };

    default:
      return state;
  }
}

export function projectsReducer(state: ProjectsState = initialProjectsState, action: ProjectsAction): ProjectsState {
  switch (action.type) {
    case ProjectsActionTypes.LoadProjects:
      return {...state,
        projects: action.payload.projects,
        error: null
      };

    case ProjectsActionTypes.LoadProjectsError:
      return {...state,
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

export const selectStudents = (state: AppState) => state.students.students;
export const selectProjects = (state: AppState) => state.projects.projects;



export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];
