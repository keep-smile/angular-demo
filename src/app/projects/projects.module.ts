import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list.component';
import {ProjectsRoutingModule} from './projects-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ProjectDetailsComponent } from './project-details.component';
import { ProjectStudentsComponent } from './project-students.component';
import {MatTooltipModule} from '@angular/material';

@NgModule({
  declarations: [ProjectsListComponent, ProjectDetailsComponent, ProjectStudentsComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    SharedModule,
    ProjectsRoutingModule,
  ],
  providers: []
})
export class ProjectsModule { }
