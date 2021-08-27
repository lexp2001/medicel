import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulePageRoutingModule } from './schedule-routing.module';

import { SchedulePage } from './schedule.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalModalPageModule } from './../../pages/cal-modal/cal-modal.module';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de'
registerLocaleData(localeDe);



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
    NgCalendarModule,
    CalModalPageModule
    
  ],
  declarations: [SchedulePage],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-De'}
  ]
})
export class SchedulePageModule {}
