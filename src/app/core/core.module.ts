import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {RouterModule} from '@angular/router';
import {
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import {LocalStorageService} from './local-storage.service';
import { FooterComponent } from './footer/footer.component';
import {SharedModule} from '../shared/shared.module';
import {StudentsModule} from '../students/students.module';


@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
  ],
  providers: [
    LocalStorageService
  ],
  imports: [
    SharedModule,
    CommonModule,
    MatToolbarModule,
    StudentsModule,
    RouterModule,
  ],

})
export class CoreModule { }
