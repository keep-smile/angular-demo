import {Student} from '../core/model/student';

import {StateActions, StateActionsTypes} from './state.actions';


export interface StudentsState {
  currentlySelected: Student | null;
  students: Student[];
}

const initialState: StudentsState = {
  currentlySelected: null,
  students: []
};


export function reducer(state = initialState, action: StateActions): StudentsState {
  switch (action.type) {

    case StateActionsTypes.AssignProject:
      return state;

    case StateActionsTypes.RemoveProject:
      return state;


    default:
      return state;
  }
}
