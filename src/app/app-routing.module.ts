import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {StudentsListComponent} from './students/students-list.component';
import {StudentDetailComponent} from './students/student-detail.component';
import {DataResolver} from './data-resolver.service';

const appRoutes: Routes = [

  {
    path: 'students/:id', component: StudentDetailComponent,
    resolve: {dataResolvedFlag: DataResolver}
  },
  {
    path: 'students', component: StudentsListComponent,
    resolve: {dataResolvedFlag: DataResolver}
  },
  {
    path: 'projects',
    data: {preload: false},
    loadChildren: () =>
      import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),

  ],
  providers: [DataResolver],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
