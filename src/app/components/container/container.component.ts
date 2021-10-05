import {Component, OnInit} from '@angular/core';
import {PlanService} from '../../services/plan.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(
    private planService: PlanService
  ) {
  }

  planOneOne = this.planService.getInfOneOne();
  planOneTwo = this.planService.getInfOneTwo();

  ngOnInit(): void {
  }
}
