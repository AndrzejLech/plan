import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerComponent} from './components/container/container.component';
import {NurComponentComponent} from './components/nur-component/nur-component.component';
import {SzyminComponentComponent} from './components/szymin-component/szymin-component.component';

const routes: Routes = [
  {path: '', component: ContainerComponent},
  {path: 'nur', component: NurComponentComponent},
  {path: 'szymin', component: SzyminComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
