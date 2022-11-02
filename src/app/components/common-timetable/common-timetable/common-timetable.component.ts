import {Component, OnInit} from '@angular/core';
import {PlanService} from "../../../services/plan.service";
import {Week} from "../../../models/Week";

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

  planMfzWeek: Week[] = [];
  planNurWeek: Week[] = [];


  ngOnInit(): void {
    this.planService.getMfzWeek().subscribe(next => {
      this.planMfzWeek = next
    });
    this.planService.getNurWeek().subscribe(next => {
      this.planNurWeek = next
    });
  }


}
