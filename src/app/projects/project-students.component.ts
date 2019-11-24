import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../core/model/student';
import {ConfirmationDialogComponent} from '../shared/confirmation-dialog/confirmation-dialog.component';
import {DeleteProject, SaveProjects} from '../store/actions/projects.actions';
import {AppState} from '../store/reducers';
import {Store} from '@ngrx/store';
import {MatDialog, MatSnackBar} from '@angular/material';
import {SaveStudents, UnEngageProject} from '../store/actions/students.actions';
import {ProjectWithStudents} from '../core/model/project';

@Component({
  selector: 'app-project-students',
  templateUrl: './project-students.component.html',
  styleUrls: ['./project-students.component.scss']
})
export class ProjectStudentsComponent implements OnInit {

  @Input() currentProject: ProjectWithStudents;

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
  }

  openStudentDeleteDialog(studentId: number) {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Do you confirm removing Student from this project?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new UnEngageProject({projectId: this.currentProject.id, studentId}));

        console.log('Save products dispatch after dialog close');


        this.store.dispatch(new SaveStudents({}));

        this.showSnackBar('You have removed Student from Project', 'Deleted');

      }
    });

  }


  showSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }


}
