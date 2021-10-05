import { Component, OnInit } from '@angular/core';
import {PlanService} from '../../services/plan.service';

@Component({
  selector: 'app-mamlina-container',
  templateUrl: './mamlina-container.component.html',
  styleUrls: ['./mamlina-container.component.scss']
})
export class MamlinaContainerComponent implements OnInit {

  constructor(
    private planService: PlanService
  ) { }

  mamlinaPlan = this.planService.getMamlina()

  ngOnInit(): void {
  }

}
