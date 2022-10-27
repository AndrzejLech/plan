import {Component, OnInit} from '@angular/core';
import {PlanService} from '../../../services/plan.service';

@Component({
  selector: 'app-nur-all-component',
  templateUrl: './nur-all-component.component.html',
  styleUrls: ['./nur-all-component.component.scss']
})
export class NurAllComponentComponent implements OnInit {

  constructor(
    private planService: PlanService
  ) {
  }

  planNur = this.planService.getNurAll();

  ngOnInit(): void {
  }

}
