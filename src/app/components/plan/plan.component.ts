import {Component, Input, OnInit} from '@angular/core';
import {Day} from '../../models/Day';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  @Input()
  days: Day[] | null = []


  constructor() {
  }

  ngOnInit(): void {
  }


}
