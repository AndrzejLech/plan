import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContainerComponent} from './components/container/container.component';
import {NurAllComponentComponent} from './components/nur/nur-component/nur-all-component.component';
import {SzyminComponentComponent} from './components/szymin-component/szymin-component.component';
import {Destinations} from './emuns/Destinations';
import {MamlinaContainerComponent} from './components/mamlina-container/mamlina-container.component';
import {MfzWeekContainerComponent} from "./components/mfz/mfz-week-component/mfz-week-container.component";
import {MfzAllContainerComponent} from "./components/mfz/mfz-all-container/mfz-all-container.component";

const routes: Routes = [
  {path: Destinations.INF, component: ContainerComponent},
  {path: Destinations.NUR, component: NurAllComponentComponent},
  {path: Destinations.SZYMIN, component: SzyminComponentComponent},
  {path: Destinations.MAMLINA, component: MamlinaContainerComponent},
  {path: Destinations.MFZ_WEEK, component: MfzWeekContainerComponent},
  {path: Destinations.MFZ_ALL, component: MfzAllContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
