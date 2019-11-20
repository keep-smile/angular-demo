import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {StudentsListComponent} from './students/students-list.component';

const appRoutes: Routes = [

  { path: 'students', component: StudentsListComponent },
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }