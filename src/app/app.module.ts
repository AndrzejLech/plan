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
import {NurAllComponentComponent} from './components/nur/nur-all-component/nur-all-component.component';
import {ToolbarComponentComponent} from './components/toolbar-component/toolbar-component.component';
import {MfzWeekContainerComponent} from "./components/mfz/mfz-week-component/mfz-week-container.component";
import {PlanWeekComponent} from "./components/plan-week/plan-week.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {WeekSpanHandler} from "./utils/WeekSpan.handler";
import {TrimDayName} from "./utils/TrimDayName";
import {ToolbarTimetableSelectComponentComponent} from './components/toolbar-timetable-select-component/toolbar-timetable-select-component.component';
import {Navigator} from "./navigation/Navigator";
import {MfzAllContainerComponent} from './components/mfz/mfz-all-container/mfz-all-container.component';
import { NurWeekComponentComponent } from './components/nur/nur-week-component/nur-week-component.component';
import { CommonTimetableComponent } from './components/common-timetable/common-timetable/common-timetable.component';
import { TimetableComponent } from './components/common-timetable/timetable/timetable.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    PlanWeekComponent,
    NurAllComponentComponent,
    ToolbarComponentComponent,
    MfzWeekContainerComponent,
    ToolbarTimetableSelectComponentComponent,
    MfzAllContainerComponent,
    NurWeekComponentComponent,
    CommonTimetableComponent,
    TimetableComponent
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
    TrimDayName,
    Navigator
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
