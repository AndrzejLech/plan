import { Component, OnInit } from '@angular/core';
import {PlanService} from '../../services/plan.service';

@Component({
  selector: 'app-szymin-component',
  templateUrl: './szymin-component.component.html',
  styleUrls: ['./szymin-component.component.scss']
})
export class SzyminComponentComponent implements OnInit {

  constructor(
    private planService: PlanService
  ) { }

  szyminPlan = this.planService.getSzymin()

  ngOnInit(): void {
  }

}
