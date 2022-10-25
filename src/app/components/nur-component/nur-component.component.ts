import {Component, OnInit} from '@angular/core';
import {PlanService} from '../../services/plan.service';

@Component({
  selector: 'app-nur-component',
  templateUrl: './nur-component.component.html',
  styleUrls: ['./nur-component.component.scss']
})
export class NurComponentComponent implements OnInit {

  constructor(
    private planService: PlanService
  ) {
  }

  planNur = this.planService.getInfOneOne();

  ngOnInit(): void {
  }

}
