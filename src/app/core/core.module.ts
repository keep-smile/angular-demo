import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatDividerModule, MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import {LocalStorageService} from './local-storage.service';
import { FooterComponent } from './footer/footer.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent
  ],
  exports: [
    ToolbarComponent,
    MatProgressSpinnerModule,
    FooterComponent,
  ],
  providers: [
    LocalStorageService
  ],
  imports: [
    SharedModule,
    MatProgressSpinnerModule,
    CommonModule,
    MatToolbarModule,
    RouterModule,
  ],

})
export class CoreModule { }
