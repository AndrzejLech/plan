import {Component, Input, OnInit} from '@angular/core';
import {DoubleDay} from '../../models/DoubleDay';

@Component({
  selector: 'app-double-plan',
  templateUrl: './double-plan.component.html',
  styleUrls: ['./double-plan.component.scss']
})
export class DoublePlanComponent implements OnInit {
  @Input()
  days: DoubleDay[] | null = []

  constructor() { }

  ngOnInit(): void {
  }

}
