import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../core/model/student';
import {select, Store} from '@ngrx/store';
import {AppState, selectIfStudentNotFound, selectStudentProjects} from '../store/reducers';
import {SetCurrentStudent} from '../store/actions/students.actions';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  currentStudent$ = new Observable<Student | null | number>();
  badStudentId$ = new Observable<boolean>();
  currentStudentId: number;
  sectionTitle = ' > Engagement in details';

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.currentStudentId = this.route.snapshot.params.id;

    // Just for Demo purposes
    this.currentStudent$ = this.store.pipe(select(selectStudentProjects));
    this.badStudentId$ = this.store.select(selectIfStudentNotFound, {currentStudentId: this.currentStudentId});


    this.badStudentId$.subscribe(badStudentId => {
      console.log('badStudentId before redirect', badStudentId);

      if (badStudentId) {
        this.router.navigate(['/404']);
        return false;
      }
      return true;
    });

    this.store.dispatch(new SetCurrentStudent({currentStudent: this.currentStudentId}));
  }

}
