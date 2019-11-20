import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentProjectsComponent } from './student-projects.component';



@NgModule({
  declarations: [StudentsListComponent, StudentDetailComponent, StudentProjectsComponent],
  imports: [
    CommonModule
  ]
})
export class StudentsModule {}
