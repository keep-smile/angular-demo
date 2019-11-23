import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list.component';
import {ProjectsService} from './projects.service';
import {ProjectsRoutingModule} from './projects-routing.module';
import {MatDividerModule, MatIconModule, MatListModule} from '@angular/material';



@NgModule({
  declarations: [ProjectsListComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatListModule
  ],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule { }
