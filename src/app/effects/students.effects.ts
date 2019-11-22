import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';

import { of } from 'rxjs';
import {LoadStudents, LoadStudentsError, LoadStudentsSuccess, StudentsActionTypes} from '../actions/students.actions';
import {LocalStorageService} from '../core/local-storage.service';

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

  constructor(private actions$: Actions, private store: Store<AppState>, private apiService: LocalStorageService) { }

}
