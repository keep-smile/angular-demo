import {Action} from '@ngrx/store';

import {Projects} from '@angular/cli/lib/config/schema';
import {Project} from '../../core/model/project';
import {Student} from '../../core/model/student';
import {StudentsActionTypes} from './students.actions';

export enum ProjectsActionTypes {
  CreateProject = '[Projects] Create Project',
  SetCurrentProject = '[Projects] Set Current Project',
  DeleteProject = '[Projects] Delete Project',
  SaveProjects = '[Projects] Save Projects',
  SaveProjectsSuccess = '[Projects] Save Projects Success',
  LoadProjects = '[Projects] Load Projects',
  LoadProjectsError = '[Projects] Projects Load Error',
  LoadProjectsSuccess = '[Projects] Projects Load Success',
}

export class ProjectsAction implements Action {
  type: string;
  payload: {
    projects: Project[] | null,
    project: Project | null,
    currentProject: Project | number | string,
    projectId: number,
    error: string | null
  };
}


export class SetCurrentProject implements Action {
  readonly type = ProjectsActionTypes.SetCurrentProject;

  constructor(readonly payload: { currentProject: string | number }) {

  }
}

export class CreateProject implements Action {
  readonly type = ProjectsActionTypes.CreateProject;

  constructor(readonly payload: { project: Project }) {

  }
}

export class DeleteProject implements Action {

  readonly type = ProjectsActionTypes.DeleteProject;
  constructor(readonly payload: { projectId: number }) {}
}

export class SaveProjects implements Action {
  readonly type = ProjectsActionTypes.SaveProjects;

  constructor() {
  }
}

export class SaveProjectsSuccess implements Action {
  readonly type = ProjectsActionTypes.SaveProjectsSuccess;

  constructor() {

  }
}

export class LoadProjects implements Action {
  readonly type = ProjectsActionTypes.LoadProjects;

  constructor(readonly payload: { projects: Projects[] }) {

  }
}

export class LoadProjectsError implements Action {
  readonly type = ProjectsActionTypes.LoadProjectsError;

  constructor(readonly payload: { error: string }) {

  }
}

export class LoadProjectsSuccess implements Action {
  readonly type = ProjectsActionTypes.LoadProjectsSuccess;

  constructor(readonly payload: { projects: Projects[] }) {

  }
}


export type ActionsUnion = LoadProjects | LoadProjectsError | LoadProjectsSuccess | DeleteProject;
