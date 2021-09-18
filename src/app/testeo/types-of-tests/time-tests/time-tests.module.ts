import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeTestsPageRoutingModule } from './time-tests-routing.module';

import { TimeTestsPage } from './time-tests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeTestsPageRoutingModule
  ],
  declarations: [TimeTestsPage]
})
export class TimeTestsPageModule {}
