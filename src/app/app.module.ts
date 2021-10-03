import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanComponent } from './components/plan/plan.component';
import {PlanService} from './services/plan.service';
import {HttpClientModule} from '@angular/common/http';
import {FlexModule} from '@angular/flex-layout';
import {MaterialModule} from './material.module';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexModule,
    MaterialModule
  ],
  providers: [PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
