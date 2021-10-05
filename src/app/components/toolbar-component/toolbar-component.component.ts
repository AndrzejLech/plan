import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Destinations} from '../../emuns/Destinations';

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar-component.component.html',
  styleUrls: ['./toolbar-component.component.scss']
})
export class ToolbarComponentComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  toInf(): void {
    this.router.navigate([Destinations.INF]);
  }

  toNur(): void {
    this.router.navigate([Destinations.NUR]);
  }

  toSzymin(): void {
    this.router.navigate([Destinations.SZYMIN]);
  }

  toMamlina() {
    this.router.navigate([Destinations.MAMLINA])
  }
}
