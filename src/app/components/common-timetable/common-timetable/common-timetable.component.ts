import {Component, OnInit} from '@angular/core';
import {PlanService} from "../../../services/plan.service";
import {Day} from "../../../models/Day";

@Component({
  selector: 'app-common-timetable',
  templateUrl: './common-timetable.component.html',
  styleUrls: ['./common-timetable.component.scss']
})
export class CommonTimetableComponent implements OnInit {

  constructor(
    private planService: PlanService
  ) {

  }

  planMfzAll: Day[] = [];
  planNurAll: Day[] = [];


  ngOnInit(): void {
    this.planService.getMfzAll().subscribe(next => {
      this.planMfzAll = next
    });
    this.planService.getMfzAll().subscribe(next => {
      this.planNurAll = next
    });
  }


}
