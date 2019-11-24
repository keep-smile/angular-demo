import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {AppState, selectStudents} from '../reducers';
import {Action, Store} from '@ngrx/store';

import {Observable, of} from 'rxjs';
import {
  LoadStudents,
  LoadStudentsError,
  LoadStudentsSuccess,
  SaveStudents,
  SaveStudentsSuccess,
  StudentsActionTypes
} from '../actions/students.actions';
import {LocalStorageService} from '../../core/local-storage.service';

@Injectable()
export class StudentsEffects {

  @Effect()
  loadStudents$ = this.actions$
    .pipe(
      ofType<LoadStudents>(StudentsActionTypes.LoadStudents),
      mergeMap((action) => this.apiService.getAllStudents()
        .pipe(
          map(students => {
            return (new LoadStudentsSuccess({students: students}));
          }),
          catchError((errorMessage) => {
            console.log('error triggered', errorMessage);

            return of(new LoadStudentsError({error: errorMessage}));
          })
        ))
    );

  @Effect()
  saveStudents: Observable<Action> = this.actions$.pipe(
    ofType<SaveStudents>(StudentsActionTypes.SaveStudents),
    withLatestFrom(this.store.select(selectStudents)),
    mergeMap(
      (action) => this.apiService.saveStudents(action[1])
        .pipe(
          map(val => {
            console.log('triggers success action');
            return (new SaveStudentsSuccess());
          }),
          catchError((errorMessage) => of(new LoadStudentsError({error: errorMessage})))
        )
    )
  );


  constructor(private actions$: Actions, private store: Store<AppState>, private apiService: LocalStorageService) {
  }

}
