import {Component, OnInit} from '@angular/core';
import {PlanService} from "../../../services/plan.service";
import {Week} from "../../../models/Week";

@Component({
  selector: 'app-mfz-week-component',
  templateUrl: './mfz-week-container.component.html',
  styleUrls: ['./mfz-week-container.component.scss']
})
export class MfzWeekContainerComponent implements OnInit {

  constructor(
    private planService: PlanService
  ) {

  }

  planWeekMfz: Week[] = [];


  ngOnInit(): void {
    this.planService.getMfzWeek().subscribe(next => {
      this.planWeekMfz = next
    });
  }

}
