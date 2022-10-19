import { Component, OnInit } from '@angular/core';
import {PlanService} from "../../services/plan.service";

@Component({
  selector: 'app-mfz-component',
  templateUrl: './mfz-container.component.html',
  styleUrls: ['./mfz-container.component.scss']
})
export class MfzContainerComponent implements OnInit {

  constructor(
    private planService: PlanService
  ) {
  }

  planWeekMfz = this.planService.getWeekInfOneOne();

  ngOnInit(): void {
  }

}
