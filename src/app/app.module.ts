import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {CoreModule} from './core/core.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StudentsEffects } from './store/effects/students.effects';
import { ProjectsEffects } from './store/effects/projects.effects';
import {metaReducers, reducers} from './store/reducers';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import {MatDialog, MatDialogModule, MatDialogRef, MatProgressSpinnerModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {MatProgressBarModule} from '@angular/material/typings/esm5/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatProgressBarModule,
    AppRoutingModule,
    CoreModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    RouterModule,
    EffectsModule.forRoot([ StudentsEffects, ProjectsEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },],
  exports: [
    ConfirmationDialogComponent
  ],
  entryComponents: [ConfirmationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
