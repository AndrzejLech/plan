import {Component, Input, OnInit} from '@angular/core';
import {Day} from "../../../models/Day";

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  @Input()
  mfzDays: Day[] | null = []

  @Input()
  nurDays: Day[] | null = []

  months = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień'
  ];


  constructor() {
  }

  ngOnInit(): void {


  }

  getDaysFromMonths(year: number, month: number) {
    return new Date(year, month, 0).getDate();
  }

}
