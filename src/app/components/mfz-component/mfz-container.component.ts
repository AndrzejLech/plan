import {Component, OnInit} from '@angular/core';
import {PlanService} from "../../services/plan.service";
import {Week} from "../../models/Week";

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

  planWeekMfz: Week[] = [];


  ngOnInit(): void {
    this.planService.getWeekInfOneOne().subscribe(next => {
      this.planWeekMfz = next
    });
  }

}
