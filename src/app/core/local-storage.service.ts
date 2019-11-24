import {Injectable} from '@angular/core';
import {Student} from './model/student';
import {Project} from './model/project';
import {Observable, throwError} from 'rxjs';

// This service simulates backend API service and use Local Storage interface

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {

    if (!this.get('students')) {
      this.set('students', initialStudents);
    }
    if (!this.get('projects')) {
      this.set('projects', initialProjects);
    }
  }


  getAllStudents(): Observable<Student[] | any> {

    return new Observable(observer => {
      setTimeout(() => {
        if (!this.get('failedRequest')) {
          this.set('failedRequest', true);
          observer.next(throwError('oops!'));
          // throw Observable.throw('Ok, it happens. Let\'s try again')
        } else {
          observer.next(
            this.get('students')
          );
        }

      }, 1000)
    });
  }

  getStudent(id: number): Student | null {
    return null;
  }

  engageUserProgect(projectId) {
  }

  saveStudents(students: Student[]) {
    return new Observable(observer => {
      setTimeout(() => {
        console.log('students saved',students );
        this.set('students', students);
      }, 800)
    })
  }

  saveProjects(projects: Project[]) {
    return new Observable(observer => {
      setTimeout(() => {
        console.log('projects saved', projects);
        this.set('projects', projects);
      }, 800)
    })
  }

  getAllProjects(): Observable<Project[]> | null {
    return new Observable(observer => {
      setTimeout(() => {
        if (!this.get('failedRequest')) {
          // this.set('failedRequest', true);
          alert(1)
          return throwError('Ok, it happens. Let\'s try again');
        } else {
          observer.next(
            this.get('projects')
          );
        }
      }, 2000)
    })
  }

  private set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  private get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

}


const initialStudents = [
  {
    id: 1, name: 'Brian Robert',
    projects: [
      1, 2
    ]
  },
  {
    id: 2, name: 'Joan Justin', projects: [
      1, 3, 4
    ]
  },
  {
    id: 3, name: 'Andre Peterson', projects: [
      1, 4
    ]
  },
  {
    id: 4, name: 'Luisa Darlington', projects: [
      1, 3
    ]
  },
];

const initialProjects = [
  {id: 1, title: 'Chemical Research', description: 'Simple chemical research'},
  {id: 2, title: 'Medical Internature', description: 'Simple medical assistance'},
  {id: 3, title: 'Math Research', description: 'Simple math research'},
  {id: 4, title: 'Soccer Tournaments', description: 'For those who like sport'},
];
