import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.scss']
})
export class AddProjectDialogComponent implements OnInit {

  createProjectFromGroup: FormGroup;
  projectTitle = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(5)
  ]);

  projectDescription = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  constructor(
    public dialogRef: MatDialogRef<AddProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) {
  }

  ngOnInit() {
    this.createProjectFromGroup = new FormGroup({
      projectTitle: this.projectTitle,
      projectDescription: this.projectDescription
    });
  }

}
