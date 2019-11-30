import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {AppState, selectProjects} from '../reducers';
import {Action, Store} from '@ngrx/store';

import {Observable, of} from 'rxjs';
import {LocalStorageService} from '../../core/local-storage.service';
import {
  LoadProjects,
  LoadProjectsError,
  LoadProjectsSuccess,
  ProjectsActionTypes,
  SaveProjects,
  SaveProjectsSuccess
} from '../actions/projects.actions';

@Injectable()
export class ProjectsEffects {

  @Effect()
  loadProjects$ = this.actions$
    .pipe(
      ofType<LoadProjects>(ProjectsActionTypes.LoadProjects),
      mergeMap((action) => this.apiService.getProjects()
        .pipe(
          map(projects => {
            return (new LoadProjectsSuccess({projects}));
          }),
          catchError((errorMessage) => of(new LoadProjectsError({error: errorMessage})))
        ))
    );

  @Effect()
  saveProjects$: Observable<Action> = this.actions$.pipe(
    ofType<SaveProjects>(ProjectsActionTypes.SaveProjects),
    withLatestFrom(this.store.select(selectProjects)),
    mergeMap(
      (action) => this.apiService.saveProjects(action[1])
        .pipe(
          map(val => {
            return (new SaveProjectsSuccess());
          }),
          catchError((errorMessage) => of(new LoadProjectsError({error: errorMessage})))
        )
    )
  );


  constructor(private actions$: Actions, private store: Store<AppState>, private apiService: LocalStorageService) {
  }

}
