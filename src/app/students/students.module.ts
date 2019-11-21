import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentProjectsComponent } from './student-projects.component';
import {MatDividerModule, MatIconModule, MatListModule, MatProgressSpinnerModule} from '@angular/material';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [StudentsListComponent, StudentDetailComponent, StudentProjectsComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,
    MatProgressSpinnerModule,
  ]
})
export class StudentsModule {}
