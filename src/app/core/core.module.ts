import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatListModule, MatToolbarModule} from '@angular/material';
import {LocalStorageService} from './local-storage.service';
import {StoreModule} from '@ngrx/store';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent
  ],
  providers: [
    LocalStorageService
  ],
  imports: [
    StoreModule,
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
  ],

})
export class CoreModule { }
