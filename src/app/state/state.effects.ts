import {Injectable} from '@angular/core';

import {Actions} from '@ngrx/effects';

import * as stateActions from './state.actions';

import {LocalStorageService} from '../core/local-storage.service';

@Injectable()
export class StateEffects {

  constructor(private  actions$: Actions,
              private localStorageService: LocalStorageService) {
  }


}
