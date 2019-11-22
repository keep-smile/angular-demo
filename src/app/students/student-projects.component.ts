import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../core/model/project';
import {AppState, selectProjects, selectStudents} from '../reducers';
import {select, Store} from '@ngrx/store';
import {UnEngageProject} from '../actions/students.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-student-projects',
  templateUrl: './student-projects.component.html',
  styleUrls: ['./student-projects.component.css']
})
export class StudentProjectsComponent implements OnInit {

  sectionTitle = 'Projects';
  projects$: Observable<Project[]>;
  @Input() projects: Project[];

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.projects$ = this.store.pipe(select(selectProjects));
  }

  unEngage(projectId: number) {
    this.store.dispatch(new UnEngageProject({projectId: projectId}));
  }

}
