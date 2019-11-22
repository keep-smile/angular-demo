import {Project} from './project';

export class Student {
  id: number;
  name: string;
  projects: number[] | Project[] | null;
}
