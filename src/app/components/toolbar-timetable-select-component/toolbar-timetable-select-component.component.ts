import {Component, Input, OnInit} from '@angular/core';
import {Navigator} from "../../navigation/Navigator";


@Component({
  selector: 'app-toolbar-timetable-select-component',
  templateUrl: './toolbar-timetable-select-component.component.html',
  styleUrls: ['./toolbar-timetable-select-component.component.scss']
})
export class ToolbarTimetableSelectComponentComponent implements OnInit {

  @Input()
  showNurAllButton =false
  @Input()
  showNurWeekButton =false
  @Input()
  showMfzAllButton =false
  @Input()
  showMfzWeekButton =false


  constructor(
    public navigator: Navigator
  ) {
  }

  ngOnInit(): void {
  }


}
