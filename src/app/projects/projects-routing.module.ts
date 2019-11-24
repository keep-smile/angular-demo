import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsListComponent} from './projects-list.component';
import {ProjectDetailsComponent} from './project-details.component';
import {DataResolver} from '../data-resolver.service';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: ProjectsListComponent,
    resolve: {dataResolvedFlag: DataResolver}
  },
  {
    path: ':id', pathMatch: 'full', component: ProjectDetailsComponent,
    resolve: {dataResolvedFlag: DataResolver}
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
