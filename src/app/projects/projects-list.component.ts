import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../core/model/student';

import {select, Store} from '@ngrx/store';
import {LoadStudents} from '../store/actions/students.actions';
import {AppState, selectProjects, selectStudents} from '../store/reducers';
import {LoadProjects} from '../store/actions/projects.actions';
import {Project} from '../core/model/project';
import {ConfirmationDialogComponent} from '../shared/confirmation-dialog/confirmation-dialog.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projects$: Observable<Project[]>;
  sectionTitle = 'Projects';
  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {

    this.projects$ = this.store.pipe(select(selectProjects));

  }



}
