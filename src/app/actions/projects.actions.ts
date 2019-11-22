import { Action } from '@ngrx/store';

import {Projects} from '@angular/cli/lib/config/schema';
import {Project} from '../core/model/project';

export enum ProjectsActionTypes {
  LoadProjects = '[Projects] Load Projects',
  LoadProjectsError = '[Projects] Projects Load Error',
  LoadProjectsSuccess = '[Projects] Projects Load Success',
}

export class ProjectsAction implements Action {
  type: string;
  payload: {
    projects: Project[] | null,
    error: string | null
  };
}

export class LoadProjects implements Action {
  readonly type = ProjectsActionTypes.LoadProjects;

  constructor(readonly payload: {projects: Projects[]}) {

  }
}

export class LoadProjectsError implements Action {
  readonly type = ProjectsActionTypes.LoadProjectsError;

  constructor(readonly payload: {error: string}) {

  }
}

export class LoadProjectsSuccess implements Action {
  readonly type = ProjectsActionTypes.LoadProjectsSuccess;

  constructor(readonly payload: {projects: Projects[]}) {

  }
}


export type ActionsUnion = LoadProjects | LoadProjectsError | LoadProjectsSuccess;
