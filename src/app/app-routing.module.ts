import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NurAllComponentComponent} from './components/nur/nur-all-component/nur-all-component.component';
import {Destinations} from './emuns/Destinations';
import {MfzWeekContainerComponent} from "./components/mfz/mfz-week-component/mfz-week-container.component";
import {MfzAllContainerComponent} from "./components/mfz/mfz-all-container/mfz-all-container.component";
import {NurWeekComponentComponent} from "./components/nur/nur-week-component/nur-week-component.component";
import {CommonTimetableComponent} from "./components/common-timetable/common-timetable/common-timetable.component";

const routes: Routes = [
  {path: Destinations.BLANK, component: MfzWeekContainerComponent},
  {path: Destinations.NUR_WEEK, component: NurWeekComponentComponent},
  {path: Destinations.NUR_ALL, component: NurAllComponentComponent},
  {path: Destinations.MFZ_WEEK, component: MfzWeekContainerComponent},
  {path: Destinations.MFZ_ALL, component: MfzAllContainerComponent},
  {path: Destinations.MFZ_NUR_COMMON, component: CommonTimetableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
