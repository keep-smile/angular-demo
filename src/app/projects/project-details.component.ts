import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AppState, selectIfProjectNotFound, selectProjectUsers} from '../store/reducers';
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
  badProjectId$ = new Observable<boolean>();
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

    this.currentProject$ = this.store.pipe(select(selectProjectUsers));



    this.badProjectId$ = this.store.select(selectIfProjectNotFound, {currentProjectId: this.currentProjectId});

    this.badProjectId$.subscribe(badProjectId => {
      if (badProjectId) {
        this.router.navigate(['/404']);
        return false;
      }
      return true;
    });


    this.store.dispatch(new SetCurrentProject({currentProject: this.currentProjectId}));
  }

  locationBack() {
    this.location.back();
  }
}
