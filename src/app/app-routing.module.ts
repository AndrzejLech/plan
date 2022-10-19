import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContainerComponent} from './components/container/container.component';
import {NurComponentComponent} from './components/nur-component/nur-component.component';
import {SzyminComponentComponent} from './components/szymin-component/szymin-component.component';
import {Destinations} from './emuns/Destinations';
import {MamlinaContainerComponent} from './components/mamlina-container/mamlina-container.component';
import {MfzContainerComponent} from "./components/mfz-component/mfz-container.component";

const routes: Routes = [
  {path: Destinations.INF, component: ContainerComponent},
  {path: Destinations.NUR, component: NurComponentComponent},
  {path: Destinations.SZYMIN, component: SzyminComponentComponent},
  {path: Destinations.MAMLINA, component: MamlinaContainerComponent},
  {path: Destinations.MFZ, component: MfzContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
