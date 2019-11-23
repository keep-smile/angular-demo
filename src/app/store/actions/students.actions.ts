import {Action} from '@ngrx/store';

import {Student} from '../../core/model/student';

export enum StudentsActionTypes {
  UnEngageProject = '[Students] Unengage Project',
  EngageProject = '[Students] Engage Project',
  LoadStudents = '[Students] Load Students',
  LoadStudentsError = '[Students] Students Load Error',
  LoadStudentsSuccess = '[Students] Students Load Success',
  SetCurrentStudent = '[Students] Students Set Current Student'
}

export class StudentsAction implements Action {
  type: string;
  payload: {
    students: Student[] | null,
    error: string | null
    projectId: number | null
    currentStudent: Student | null

  };
}

export class LoadStudents implements Action {
  readonly type = StudentsActionTypes.LoadStudents;

  constructor(readonly payload: { students: Student[] | null }) {

  }
}

export class SetCurrentStudent implements Action {
  readonly type = StudentsActionTypes.SetCurrentStudent;

  constructor(readonly payload: { currentStudent: Student[] | null | number }) {

  }
}

export class LoadStudentsSuccess implements Action {
  readonly type = StudentsActionTypes.LoadStudentsSuccess;

  constructor(readonly payload: { students: Student[] | null }) {

  }
}

export class LoadStudentsError implements Action {
  readonly type = StudentsActionTypes.LoadStudentsError;

  constructor(readonly payload: { error: string }) {

  }
}

export class UnEngageProject implements Action {
  readonly type = StudentsActionTypes.UnEngageProject;

  constructor(readonly payload: { projectId: number }) {

  }
}


export type ActionsUnion = LoadStudents
  | LoadStudentsError
  | UnEngageProject
  | LoadStudentsSuccess;
