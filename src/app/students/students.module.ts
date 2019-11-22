import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentProjectsComponent } from './student-projects.component';
import {
  MatButtonModule,
  MatCardLgImage, MatCardModule, MatCardTitle,
  MatDividerModule, MatGridListModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [StudentsListComponent, StudentDetailComponent, StudentProjectsComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ]
})
export class StudentsModule {}
