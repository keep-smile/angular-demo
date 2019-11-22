import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../core/model/student';

import {select, Store} from '@ngrx/store';
import {LoadStudents} from '../actions/students.actions';
import {AppState, selectStudents} from '../reducers';
import {LoadProjects} from '../actions/projects.actions';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students$: Observable<Student[]>;
  sectionTitle = 'Students engagement details';
  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {

    this.students$ = this.store.pipe(select(selectStudents));

  }

}
