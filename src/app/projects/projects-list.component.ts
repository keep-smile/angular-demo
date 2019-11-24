import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {select, Store} from '@ngrx/store';
import {AppState, selectProjects} from '../store/reducers';
import {CreateProject, DeleteProject, SaveProjects} from '../store/actions/projects.actions';
import {Project, ProjectWithStudents} from '../core/model/project';
import {MatDialog, MatSnackBar} from '@angular/material';
import {AddProjectDialogComponent} from '../shared/add-project-dialog/add-project-dialog.component';
import {ConfirmationDialogComponent} from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  projectsWithStudent$: Observable<ProjectWithStudents[]>;
  projects$: Observable<Project[]>;
  sectionTitle = 'Projects';

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {

    this.projects$ = this.store.pipe(select(selectProjects));
    this.projectsWithStudent$ = this.store.pipe(select((store) => {

      return store.projects.projects.map((project): ProjectWithStudents => {

        const projectStudents = store.students.students.filter( student => student.projects.indexOf(project.id) >= 0 );

        return {...project, students: projectStudents};
      });

    } ));

  }

  createProject() {
    const dialogRef = this.dialog.open(AddProjectDialogComponent, {
      width: '350px',
      data: 'Please complete project data'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        this.store.dispatch(new CreateProject({
          project: {
            title: result.projectTitle,
            description: result.projectDescription,
            id: 0
          }
        }));

        this.store.dispatch(new SaveProjects());
        this.showSnackBar('You have created new Project', 'New Project');
      }
    });
  }

  showSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  openDeleteDialog(projectId: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Do you confirm deletion of this project?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new DeleteProject({projectId}));

        console.log('Save products dispatch after dialog close');


        this.store.dispatch(new SaveProjects());

        this.showSnackBar('You have deleted the project', 'Deleted');

      }
    });
  }



}
