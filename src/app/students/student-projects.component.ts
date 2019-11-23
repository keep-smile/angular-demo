import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../core/model/project';
import {AppState, selectAvailableProjects, selectProjects, selectStudents} from '../store/reducers';
import {select, Store} from '@ngrx/store';
import {UnEngageProject} from '../store/actions/students.actions';
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
  availableProjects$: Observable<Project[]>;
  projectSelected: number | null;
  engagementError: boolean;

  @Input() projects: Project[];

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.availableProjects$ = this.store.pipe(select(selectAvailableProjects));
  }

  unEngage(projectId: number) {

  }

  doProjectEngagement(projectId: number | null){

    if(!projectId){
      this.engagementError = true
    } else {

      this.store.dispatch(new EngageProject({projectId: projectId}));
    }

  }

  openUnengageDialog(projectId: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "Do you confirm unengagement from this project?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.store.dispatch(new UnEngageProject({projectId: projectId}));
      }
    });
  }

}
