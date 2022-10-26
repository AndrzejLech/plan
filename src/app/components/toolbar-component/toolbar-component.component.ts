import {Component, OnInit} from '@angular/core';
import {Navigator} from "../../navigation/Navigator";


@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar-component.component.html',
  styleUrls: ['./toolbar-component.component.scss']
})
export class ToolbarComponentComponent implements OnInit {

  constructor(
    public navigator: Navigator
  ) {
  }

  ngOnInit(): void {
  }


}
