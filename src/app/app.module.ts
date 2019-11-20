import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {CoreModule} from './core/core.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import {reducer} from './state/state.reducer';
import {StateEffects} from './state/state.effects';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    StoreModule.forRoot( reducer),
    EffectsModule.forRoot([StateEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
