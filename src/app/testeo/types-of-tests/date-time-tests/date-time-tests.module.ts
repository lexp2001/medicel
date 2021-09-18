import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateTimeTestsPageRoutingModule } from './date-time-tests-routing.module';

import { DateTimeTestsPage } from './date-time-tests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateTimeTestsPageRoutingModule
  ],
  declarations: [DateTimeTestsPage]
})
export class DateTimeTestsPageModule {}
