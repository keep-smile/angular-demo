import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatListModule, MatProgressSpinnerModule, MatToolbarModule} from '@angular/material';
import {LocalStorageService} from './local-storage.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent
  ],
  exports: [
    ToolbarComponent,
    FooterComponent
  ],
  providers: [
    LocalStorageService
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,

  ],

})
export class CoreModule { }
