import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from '../../store/reducers';
import {Store} from '@ngrx/store';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {

  errorMessage: string;

  @Input() loading: boolean;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select(state => state.projects.error).subscribe(message => {
      console.log(message);


      return this.errorMessage = message
    } );
  }

  ngOnInit() {
  }



}
