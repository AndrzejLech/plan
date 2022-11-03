import {Component, Input, OnInit} from '@angular/core';
import {Week} from "../../../models/Week";
import {TrimDayName} from "../../../utils/TrimDayName";
import {Day} from "../../../models/Day";
import {Months} from "../../../emuns/Months";


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  @Input()
  mfzWeeks: Week[] = []

  @Input()
  nurWeeks: Week[] = []

  months = Months
  daysName = ['pon', 'wto', 'śro', 'czw', 'pią', 'sob', 'nie']

  startingCurrentMonth: number = new Date().getMonth();
  currentMonth = this.startingCurrentMonth


  constructor(
    private trimDay: TrimDayName,
  ) {

  }

  ngOnInit(): void {

  }

  getDaysFromMonths(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  isCurrentMonth(dayName: string, monthIndex: number): boolean {
    let dayMonthIndex = this.trimDay.trimToMonth(dayName) - 1
    return (dayMonthIndex === monthIndex)
  }

  incrementMonth() {
    this.currentMonth++;
  }

  getDayNumber(dayName: string): number {
    return this.trimDay.trimToDay(dayName)
  }

  getCurrentMonthWeeks(mfzWeeks: Week[], monthIndex: number): Week[] {
    let currentMonthWeeks: Week[] = []
    for (let week of mfzWeeks) {
      for (let day of week.days) {
        if (this.trimDay.trimToMonth(day.name) - 1 === monthIndex) {
          currentMonthWeeks.push(week)
          break;
        }
      }
    }
    return currentMonthWeeks;
  }

  getAllSemesterMonths(): number[] {
    let months = []
    if (this.mfzWeeks) {
      let lastWeek = this.mfzWeeks[this.mfzWeeks.length - 1].days
      let lastMonth = this.trimDay.trimToMonth(lastWeek[lastWeek.length - 1].name)

      if (this.startingCurrentMonth > lastMonth) {
        let monthDifference = (12 - this.startingCurrentMonth) + lastMonth
        for (let i = this.startingCurrentMonth; i < this.startingCurrentMonth + monthDifference; i++) {
          if (i > 11) {
            months.push(i - 12)
          } else months.push(i)
        }
      } else {
        let monthDifference = lastMonth - this.startingCurrentMonth
        for (let i = this.startingCurrentMonth; i < monthDifference; i++) {
          months.push(i)
        }
      }
    }
    return months
  }

  isBothBusy(mfzDay: Day): boolean {
    for (let week of this.nurWeeks) {
      for (let nurDay of week.days) {
        if (nurDay.name === mfzDay.name) {
          console.log(nurDay.name, nurDay.isBusy, mfzDay.isBusy)
          if (nurDay.isBusy || mfzDay.isBusy) {
            return true
          }
        }
      }
    }
    return false
  }
}
