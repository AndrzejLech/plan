import {Subject} from './Subject';

export class Day{
  name: string;
  subjects: Subject[]
  isBusy: boolean

  constructor(name: string, subjects: Subject[], isBusy: boolean) {
    this.name = name;
    this.subjects = subjects;
    this.isBusy = isBusy;
  }
}
