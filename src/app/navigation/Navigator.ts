import {Destinations} from "../emuns/Destinations";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root',})
export class Navigator {

  constructor(
    private router: Router
  ) {
  }

  toInf(): void {
    this.router.navigate([Destinations.INF]);
  }

  toMfzWeek(): void {
    this.router.navigate([Destinations.MFZ_WEEK]);
  }

  toMfzAll(): void {
    this.router.navigate([Destinations.MFZ_ALL]);
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
