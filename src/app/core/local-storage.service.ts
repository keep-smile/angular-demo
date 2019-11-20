import {Injectable} from '@angular/core';
import {Student} from './model/student';
import {Project} from './model/project';

// This service simulates backend API and use Local Storage interface

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


  getAllStudents(): Student[] | null {
    return null;
  }

  getStudent(id: number): Student | null {
    return null;
  }

  getAllProjects(): Project[] | null {
    return null;
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
  {id: 1, name: 'Brian Robert', projects: []}
];

const initialProjects = [
  {id: 1, title: 'Chemical Research'}
];
