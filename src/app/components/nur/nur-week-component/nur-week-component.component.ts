import { Component, OnInit } from '@angular/core';
import {PlanService} from "../../../services/plan.service";
import {Week} from "../../../models/Week";

@Component({
  selector: 'app-nur-week-component',
  templateUrl: './nur-week-component.component.html',
  styleUrls: ['./nur-week-component.component.scss']
})
export class NurWeekComponentComponent implements OnInit {

  constructor(
    private planService: PlanService
  ) {

  }

  planWeekNur: Week[] = [];


  ngOnInit(): void {
    this.planService.getNurWeek().subscribe(next => {
      this.planWeekNur = next
    });
  }
}
