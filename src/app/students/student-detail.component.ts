import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../core/model/student';
import {select, Store} from '@ngrx/store';
import {AppState, selectStudents} from '../store/reducers';
import {LoadStudents, SetCurrentStudent} from '../store/actions/students.actions';
import {LoadProjects} from '../store/actions/projects.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../core/model/project';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  currentStudent$ = new Observable<Student | null | number>();
  currentStudentId: number;
  sectionTitle = ' > Engagement in details';
  breakpoint = 5;


  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }


  ngOnInit() {

    this.breakpoint = (window.innerWidth <= 450) ? 1 : 5;

    this.currentStudentId = this.route.snapshot.params.id;

    // Just for Demo purposes
    this.currentStudent$ = this.store.pipe(select((state: AppState) => {

      if (state.students.currentStudent && state.projects.projects && state.projects.projects.length) {

        const currentStudent =  state.students.currentStudent;

        const projectsDetailed = [] as Project[];

        const projectsList = state.projects.projects;

        currentStudent.projects.forEach((projectId, index, projects) => {

          const project = projectsList.find(project => project.id === projectId);
          projectsDetailed.push(project);

        });

        return {...currentStudent, projects: projectsDetailed };

      } else {
        return null;
      }
    }));

    this.store.dispatch(new SetCurrentStudent({currentStudent: this.currentStudentId}));
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 450) ? 1 : 5;

  }
}
