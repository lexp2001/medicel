import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenEventsDetailsPageRoutingModule } from './screen-events-details-routing.module';

import { ScreenEventsDetailsPage } from './screen-events-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenEventsDetailsPageRoutingModule
  ],
  declarations: [ScreenEventsDetailsPage]
})
export class ScreenEventsDetailsPageModule {}
