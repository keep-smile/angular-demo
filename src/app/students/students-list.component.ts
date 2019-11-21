import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../core/model/student';

import {select, Store} from '@ngrx/store';
import {LoadStudents} from '../actions/students.actions';
import {AppState, selectStudents} from '../reducers';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students$: Observable<Student[]>;
  sectionTitle = 'Students and their engagement details';
  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {


    this.store.dispatch(new LoadStudents({students: null}));
    // this.store.dispatch(new LoadProjects({projects: null}));


    this.students$ = this.store.pipe(select(selectStudents));

  }

}
