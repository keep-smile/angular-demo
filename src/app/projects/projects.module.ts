import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list.component';
import {ProjectsService} from './projects.service';
import {ProjectsRoutingModule} from './projects-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ProjectDetailsComponent } from './project-details.component';

@NgModule({
  declarations: [ProjectsListComponent, ProjectDetailsComponent],
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
