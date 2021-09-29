import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StreetAddressPageRoutingModule } from './street-address-routing.module';

import { StreetAddressPage } from './street-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StreetAddressPageRoutingModule
  ],
  declarations: [StreetAddressPage]
})
export class StreetAddressPageModule {}
