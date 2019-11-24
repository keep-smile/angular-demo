import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from './store/reducers';
import {LoadStudents} from './store/actions/students.actions';
import {LoadProjects} from './store/actions/projects.actions';
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
        return (store.projects.projects && store.projects.projects.length
          && store.students.students && store.students.students.length) ? true : false;
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
  }

}
