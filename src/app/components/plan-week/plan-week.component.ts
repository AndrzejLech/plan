import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Week} from "../../models/Week";
import {Day} from "../../models/Day";
import {WeekSpanHandler} from "../../utils/WeekSpan.handler";
import {TrimDayName} from "../../utils/TrimDayName";

@Component({
  selector: 'app-week-plan',
  templateUrl: './plan-week.component.html',
  styleUrls: ['./plan-week.component.scss']
})
export class PlanWeekComponent implements OnInit, OnChanges {
  @Input()
  weeks: Week[] = []

  @Output()
  weekEvent = new EventEmitter<Day[]>()

  pageIndex: number = 0;
  weekSpan = ''

  constructor(
    private weekSpanHandler: WeekSpanHandler,
    private trimDay:TrimDayName
  ) {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.weeks.currentValue.length > 0) {
      this.weekSpanHandler.weekSpan.subscribe(weekSpan => {
        this.weekSpan = weekSpan
      })
      this.calculateWeekSpan()
    }

  }

  nextPage() {
    if (this.weeks![this.pageIndex + 1] && this.weeks) {
      this.pageIndex++;
      this.weekEvent.emit(this.weeks[this.pageIndex].days)
    }
    this.calculateWeekSpan()
  }

  calculateWeekSpan() {
    let week = this.weeks![this.pageIndex].days;
    this.weekSpanHandler.setWeekSpan(`${this.trimDay.trim(week[0].name)} - ${this.trimDay.trim(week[week.length - 1].name)}`)
  }

  previousPage() {
    if (this.weeks![this.pageIndex - 1] && this.weeks) {
      this.pageIndex--;
      this.weekEvent.emit(this.weeks[this.pageIndex].days)
    }
    this.calculateWeekSpan()
  }


}
