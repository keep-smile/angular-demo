import {Action} from '@ngrx/store';
import {Student} from '../model/student';
import {Project} from '../model/project';

export enum StateActionsTypes {
  AssignProject = '[Student] Assign project',
  RemoveProject = '[Student] Remove Product',

}

export class AssignProject implements Action {
  readonly type = StateActionsTypes.AssignProject;

  constructor(public payload: number) {
  }
}

export class RemoveProject implements Action {
  readonly type = StateActionsTypes.RemoveProject;

  constructor(public payload: Project) {
  }
}

export type StateActions = AssignProject
  | RemoveProject;

