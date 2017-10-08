import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemperatureMonitorService } from "app/temperature-monitor.service";
import {ProgressBarModule} from "ng2-progress-bar";
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProgressBarModule,
    FormsModule
  ],
  providers: [TemperatureMonitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
