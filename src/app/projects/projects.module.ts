import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list.component';
import {ProjectsService} from './projects.service';
import {ProjectsRoutingModule} from './projects-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ProjectDetailsComponent } from './project-details.component';
import { ProjectStudentsComponent } from './project-students.component';

@NgModule({
  declarations: [ProjectsListComponent, ProjectDetailsComponent, ProjectStudentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsRoutingModule,
  ],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule { }
