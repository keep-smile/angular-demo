import {Injectable} from '@angular/core';
import {Student} from './model/student';
import {Project} from './model/project';
import {Observable, of} from 'rxjs';

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


  getAllStudents(): Observable<Student[]> | null {

    return new Observable(observer => {
      setTimeout(() => {
        console.log('Students API Request triggered');
        observer.next( this.get('students'));
      }, 1000)
    });
  }

  getStudent(id: number): Student | null {
    return null;
  }

  getAllProjects(): Observable<Project[]> | null {
    return new Observable(observer => {
      console.log('Students API Request triggered');
      setTimeout(() => {
        observer.next( this.get('projects'));
      }, 1000)
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
  {id: 1, name: 'Brian Robert', projects: [1,2]},
  {id: 2, name: 'Joan Justin', projects: [1,3,4]},
  {id: 3, name: 'Andre Peterson', projects: [1,4]},
  {id: 4, name: 'Luisa Darlington', projects: [3,2]},
];

const initialProjects = [
  {id: 1, title: 'Chemical Research'},
  {id: 2, title: 'Medical Internature'},
  {id: 3, title: 'Math Research'},
  {id: 4, title: 'Soccer Tournaments'},
];
