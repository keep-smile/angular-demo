import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../core/model/project';
import {AppState, selectProjects, selectStudents} from '../reducers';
import {select, Store} from '@ngrx/store';
import {UnEngageProject} from '../actions/students.actions';
import {Observable} from 'rxjs';
import {ConfirmationDialogComponent} from '../shared/confirmation-dialog/confirmation-dialog.component';
import {MAT_SELECT_SCROLL_STRATEGY, MatDialog} from '@angular/material';
import {BlockScrollStrategy, Overlay} from '@angular/cdk/overlay';

export function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}

@Component({
  selector: 'app-student-projects',
  templateUrl: './student-projects.component.html',
  styleUrls: ['./student-projects.component.css'],
  providers: [
    { provide: MAT_SELECT_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay] }
  ]
})
export class StudentProjectsComponent implements OnInit {

  sectionTitle = 'Projects';
  projects$: Observable<Project[]>;
  projectSelected: number | null;

  @Input() projects: Project[];

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.projects$ = this.store.pipe(select(selectProjects));
  }

  unEngage(projectId: number) {

  }

  doProjectEngagement(projectId: number){

  }

  openDialog(projectId: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Do you confirm unengagement from this project?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Yes clicked');
        this.store.dispatch(new UnEngageProject({projectId: projectId}));
      }
    });
  }

}
