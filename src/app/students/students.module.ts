import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentsListComponent} from './students-list.component';
import {StudentDetailComponent} from './student-detail.component';
import {StudentProjectsComponent} from './student-projects.component';
import {
  MatCardModule,
  MatSelectModule,
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {OverlayModule} from '@angular/cdk/overlay';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [StudentsListComponent, StudentProjectsComponent, StudentDetailComponent],
  imports: [
    OverlayModule,
    SharedModule,
    CommonModule,
    MatSelectModule,
    RouterModule,
  ],
  entryComponents:[StudentDetailComponent]
})
export class StudentsModule {
}
