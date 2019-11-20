import {createFeatureSelector, createSelector} from '@ngrx/store';
import {StudentsState} from './state.reducer';

const getStudentsFeatureState = createFeatureSelector<StudentsState>('students');

export const getCurrentlySelected = createSelector(
  getStudentsFeatureState,
  state => state.currentlySelected
);

export const getAllStudents = createSelector(
  getStudentsFeatureState,
  state => state.students
);

