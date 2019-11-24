import {Student} from './student';

export class Project {
  id: number;
  title: string;
  description: string;
}
export class ProjectWithStudents extends Project{
  students: Student[] | [];
}
