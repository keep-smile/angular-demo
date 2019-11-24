import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState} from '../store/reducers';
import {SetCurrentProject} from '../store/actions/projects.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectWithStudents} from '../core/model/project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  currentProject$ = new Observable<ProjectWithStudents>();
  currentProjectId: number;
  sectionTitle = ' > Project in details';

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
  }


  ngOnInit() {

    this.currentProjectId = this.route.snapshot.params['id'];

    // Just for Demo purposes
    this.currentProject$ = this.store.pipe(select((state: AppState) => {

      if (state.projects.currentProject && state.projects.projects && state.projects.projects.length) {

        const currentProject = state.projects.currentProject;

        const projectStudents = state.students.students.filter(
          student => student.projects.indexOf(currentProject.id) >= 0
        );

        console.log('Project students', projectStudents);


        return {...currentProject, students: projectStudents};

      } else {
        return null;
      }
    }));

    this.store.dispatch(new SetCurrentProject({currentProject: this.currentProjectId}));
  }

  locationBack() {
    this.location.back()
  };
}
