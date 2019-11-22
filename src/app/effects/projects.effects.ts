import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';

import { of } from 'rxjs';
import {LocalStorageService} from '../core/local-storage.service';
import {LoadProjects, LoadProjectsError, LoadProjectsSuccess, ProjectsActionTypes} from '../actions/projects.actions';

@Injectable()
export class ProjectsEffects {

  @Effect()
  loadProjects$ = this.actions$
    .pipe(
      ofType<LoadProjects>(ProjectsActionTypes.LoadProjects),
      mergeMap((action) => this.apiService.getAllProjects()
        .pipe(
          map(projects => {
            return (new LoadProjectsSuccess({projects: projects}));
          }),
          catchError((errorMessage) => of(new LoadProjectsError({error: errorMessage})))
        ))
    );

  constructor(private actions$: Actions, private store: Store<AppState>, private apiService: LocalStorageService) { }

}
