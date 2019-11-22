import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../core/model/student';
import {Project} from '../core/model/project';

@Component({
  selector: 'app-student-projects',
  templateUrl: './student-projects.component.html',
  styleUrls: ['./student-projects.component.css']
})
export class StudentProjectsComponent implements OnInit {

  sectionTitle = 'Projects';
  @Input() projects: Project[];
  constructor() { }

  ngOnInit() {
  }

}
