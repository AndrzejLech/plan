import {Subject} from './Subject';

export class DoubleDay {
  name: string;
  subjects1: Subject[]
  subjects2: Subject[]

  constructor(name: string, subjects1: Subject[], subjects2: Subject[]) {
    this.name = name;
    this.subjects1 = subjects1;
    this.subjects2 = subjects2;
  }
}
