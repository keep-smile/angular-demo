import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../core/model/student';
import {select, Store} from '@ngrx/store';
import {AppState, selectStudents} from '../reducers';
import {LoadStudents, SetCurrentStudent} from '../actions/students.actions';
import {LoadProjects} from '../actions/projects.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../core/model/project';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  currentStudent$ = new Observable<Student | null | number>();
  currentStudentId: number;
  sectionTitle = ' > Engagement in details';

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.currentStudentId = this.route.snapshot.params['id'];

    // Just for Demo purposes
    this.currentStudent$ = this.store.pipe(select((state: AppState) => {

      console.log('Current User selector triggered', state);

      if (state.students.currentStudent && state.projects.projects && state.projects.projects.length) {

        const currentStudent =  state.students.currentStudent;

        const projectsDetailed = [] as Project[];

        const projectsList = state.projects.projects;

        currentStudent.projects.forEach((projectId, index, projects) => {

          const project = projectsList.find(project => project.id === projectId);
          projectsDetailed.push(project);

        });

        console.log('Current Student output', projectsDetailed);

        return {...currentStudent, projects: projectsDetailed };

      } else {
        return null;
      }
    }));

    this.store.dispatch(new SetCurrentStudent({currentStudent: this.currentStudentId}));
  }
}
