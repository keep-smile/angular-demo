import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list.component';
import {ProjectsService} from './projects.service';



@NgModule({
  declarations: [ProjectsListComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule { }
