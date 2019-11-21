import {Injectable} from '@angular/core';
import {Student} from './model/student';
import {Project} from './model/project';
import {Observable} from 'rxjs';

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
      setInterval(() => {
        observer.next( this.get('students'));
      }, 1000)
    })
  }

  getStudent(id: number): Student | null {
    return null;
  }

  getAllProjects(): Observable<Project[]> | null {
    return new Observable(observer => {
      setInterval(() => {
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
  {id: 1, name: 'Brian Robert', projects: [1]}
];

const initialProjects = [
  {id: 1, title: 'Chemical Research'}
];
