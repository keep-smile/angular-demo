import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SnackbarComponent} from './snackbar/snackbar.component';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {
  MAT_SNACK_BAR_DATA,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatButtonModule, MatCardModule,
  MatDialogModule,
  MatDialogRef,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatProgressSpinnerModule,
  MatSnackBarModule
} from '@angular/material';
import {AddProjectDialogComponent} from './add-project-dialog/add-project-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ExcelDownloadComponent} from './excel-download/excel-download.component';
import { HeaderComponent } from './header/header.component';
import { ApiErrorComponent } from './api-error/api-error.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [SnackbarComponent, ConfirmationDialogComponent, AddProjectDialogComponent, ExcelDownloadComponent, HeaderComponent, ApiErrorComponent, LoaderComponent],
  exports: [
    SnackbarComponent,
    ConfirmationDialogComponent,
    AddProjectDialogComponent,
    ExcelDownloadComponent,
    MatSnackBarModule,
    HeaderComponent,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    LoaderComponent,
    MatListModule],

  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
    {provide: MAT_SNACK_BAR_DATA, useValue: {}},
    {provide: MatDialogRef, useValue: {}},
  ],
  entryComponents: [ConfirmationDialogComponent, SnackbarComponent, AddProjectDialogComponent],
})
export class SharedModule {
}
