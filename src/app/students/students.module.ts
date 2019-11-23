import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentProjectsComponent } from './student-projects.component';
import {
  MatButtonModule,
  MatCardLgImage, MatCardModule, MatCardTitle, MatDialogModule,
  MatDividerModule, MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatListModule, MatMenuModule,
  MatProgressSpinnerModule, MatSelectModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [StudentsListComponent, StudentDetailComponent, StudentProjectsComponent],
  imports: [
    OverlayModule,
    CommonModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    RouterModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
  ]
})
export class StudentsModule {}
