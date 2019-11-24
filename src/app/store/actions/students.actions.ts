import {Action} from '@ngrx/store';

import {Student} from '../../core/model/student';

export enum StudentsActionTypes {
  UnEngageProject = '[Students] Unengage Project',
  EngageProject = '[Students] Engage Project',
  SaveStudents = '[Students] Save Students',
  SaveStudentsSuccess = '[Students] Save StudentsSuccess',
  LoadStudents = '[Students] Load Students',
  LoadStudentsError = '[Students] Students Load Error',
  LoadStudentsSuccess = '[Students] Students Load Success',
  SetCurrentStudent = '[Students] Students Set Current Student'
}

export class StudentsAction implements Action {
  type: string;
  payload: {
    students: Student[] | null,
    error: string | null,
    projectId: number | null,
    studentId: number | null,
    currentStudent: Student | null,

  };
}

export class LoadStudents implements Action {
  readonly type = StudentsActionTypes.LoadStudents;

  constructor(readonly payload: { students: Student[] | null }) {

  }
}

export class SaveStudents implements Action {
  readonly type = StudentsActionTypes.SaveStudents;

  constructor(readonly payload) {

  }
}

export class SaveStudentsSuccess implements Action {
  readonly type = StudentsActionTypes.SaveStudentsSuccess;

  constructor() {

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

  constructor(readonly payload: { projectId: number, studentId: number | null }) {

  }
}

export class EngageProject implements Action {
  readonly type = StudentsActionTypes.EngageProject;

  constructor(readonly payload: { projectId: number }) {

  }
}


export type ActionsUnion = LoadStudents
  | LoadStudentsError
  | UnEngageProject
  | SaveStudents
  | EngageProject
  | LoadStudentsSuccess;
