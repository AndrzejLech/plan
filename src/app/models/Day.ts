import {Subject} from './Subject';

export class Day{
  name: string;
  subjects: Subject[]

  constructor(name: string, subjects: Subject[]) {
    this.name = name;
    this.subjects = subjects;
  }
}
