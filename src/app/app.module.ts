import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PlanComponent} from './components/plan/plan.component';
import {PlanService} from './services/plan.service';
import {HttpClientModule} from '@angular/common/http';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import {ContainerComponent} from './components/container/container.component';
import {NurComponentComponent} from './components/nur-component/nur-component.component';
import {InfComponentComponent} from './components/inf-component/inf-component.component';
import {ToolbarComponentComponent} from './components/toolbar-component/toolbar-component.component';
import {DoublePlanComponent} from './components/double-plan/double-plan.component';
import {SzyminComponentComponent} from './components/szymin-component/szymin-component.component';
import {MamlinaContainerComponent} from './components/mamlina-container/mamlina-container.component';
import {MfzContainerComponent} from "./components/mfz-component/mfz-container.component";
import {PlanWeekComponent} from "./components/plan-week/plan-week.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {WeekSpanHandler} from "./utils/WeekSpan.handler";
import {TrimDayName} from "./utils/TrimDayName";

@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    PlanWeekComponent,
    ContainerComponent,
    NurComponentComponent,
    InfComponentComponent,
    ToolbarComponentComponent,
    DoublePlanComponent,
    SzyminComponentComponent,
    MfzContainerComponent,
    MamlinaContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexModule,
    MaterialModule,
    ExtendedModule,
    MatButtonToggleModule
  ],
  providers: [
    PlanService,
    WeekSpanHandler,
    TrimDayName
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
