import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Observable, of} from 'rxjs';


import {Student} from './core/model/student';
import {Action, select, Store} from '@ngrx/store';
import {AppState, selectStudents} from './store/reducers';
import {LoadStudents, StudentsActionTypes} from './store/actions/students.actions';
import {LoadProjects, ProjectsActionTypes} from './store/actions/projects.actions';
import {Actions} from '@ngrx/effects';
import {filter, first, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataResolver implements Resolve<boolean> {

  constructor(private store: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<boolean> {

    return this.store.pipe(
      select((store: AppState): boolean => {
        return (store.projects.projects && store.students.students) ? true : false;
      }),
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new LoadStudents({students: null}));
          this.store.dispatch(new LoadProjects({projects: null}));
        }
      }),
      filter(loaded => loaded),
      first()
    );

    // return of(true);
  }

}
