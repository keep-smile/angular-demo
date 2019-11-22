import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../core/model/project';
import {AppState} from '../reducers';
import {Store} from '@ngrx/store';
import {UnEngageProject} from '../actions/students.actions';

@Component({
  selector: 'app-student-projects',
  templateUrl: './student-projects.component.html',
  styleUrls: ['./student-projects.component.css']
})
export class StudentProjectsComponent implements OnInit {

  sectionTitle = 'Projects';
  @Input() projects: Project[];

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit() {
  }

  unEngage(projectId: number) {
    this.store.dispatch(new UnEngageProject({projectId: projectId}));
  }

}
