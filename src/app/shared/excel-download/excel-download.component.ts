import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Project} from '../../core/model/project';
import {Student} from '../../core/model/student';
import {Store} from '@ngrx/store';
import {AppState, selectProjects, selectStudents, selectStudentsFlatten} from '../../store/reducers';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-excel-download',
  templateUrl: './excel-download.component.html',
  styleUrls: ['./excel-download.component.scss']
})
export class ExcelDownloadComponent implements OnInit, OnDestroy {

  projects$: Observable<any>;
  students$: Observable<any>;

  projects: Project[];
  students: Student[];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.projects$ = this.store.select(selectProjects);
    this.students$ = this.store.select(selectStudentsFlatten);

    this.projects$.subscribe(projects => this.projects = projects);
    this.students$.subscribe(students => this.students = students);

  }

  downloadExcel() {
    this.generateExcel(this.projects, this.students);
  }

  generateExcel(projects: Project[], students: Student[]): void {

    const projectsSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(projects);
    const studentsSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(students);
    const workbook: XLSX.WorkBook = {
      Sheets: {'Students': studentsSheet, 'Projects': projectsSheet},
      SheetNames: ['Students', 'Projects']
    };
    const excelBuffer: any = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});

    const data: Blob = new Blob([excelBuffer], {type: EXCEL_TYPE});

    const link = document.createElement('a');
    const url = URL.createObjectURL(data);
    link.setAttribute('href', url);
    link.setAttribute('download', 'students_projects.xlsx');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  ngOnDestroy(): void {
    // this.projects$.unsubscribe();
    // this.students$.unsubscribe();
  }

}
