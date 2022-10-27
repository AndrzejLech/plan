import {Destinations} from "../emuns/Destinations";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root',})
export class Navigator {

  constructor(
    private router: Router
  ) {
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


}
