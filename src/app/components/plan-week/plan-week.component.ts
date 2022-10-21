import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Week} from "../../models/Week";
import {Day} from "../../models/Day";

@Component({
  selector: 'app-week-plan',
  templateUrl: './plan-week.component.html',
  styleUrls: ['./plan-week.component.scss']
})
export class PlanWeekComponent implements OnInit {
  @Input()
  weeks: Week[] | null = []

  @Output()
  weekEvent = new EventEmitter<Day[]>()

  pageIndex:number = 0;

  constructor() {

  }

  ngOnInit(): void {
  }

  nextPage(){
    if(this.weeks![this.pageIndex+1] && this.weeks){
      this.pageIndex++;
      this.weekEvent.emit(this.weeks[this.pageIndex].days)
    }
  }

  previousPage(){
    if(this.weeks![this.pageIndex-1] && this.weeks){
      this.pageIndex--;
      this.weekEvent.emit(this.weeks[this.pageIndex].days)
    }
  }


}
