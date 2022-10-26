import {Component, OnInit} from '@angular/core';
import {PlanService} from "../../../services/plan.service";
import {Day} from "../../../models/Day";

@Component({
  selector: 'app-mfz-all-container',
  templateUrl: './mfz-all-container.component.html',
  styleUrls: ['./mfz-all-container.component.scss']
})
export class MfzAllContainerComponent implements OnInit {

  constructor(
    private planService: PlanService
  ) {

  }

  planAllMfz: Day[] = [];


  ngOnInit(): void {
    this.planService.getMfzAll().subscribe(next => {
      this.planAllMfz = next
    });
  }
}
