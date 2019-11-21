import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list.component';
import {ProjectsService} from './projects.service';
import {ProjectsRoutingModule} from './projects-routing.module';



@NgModule({
  declarations: [ProjectsListComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule { }
