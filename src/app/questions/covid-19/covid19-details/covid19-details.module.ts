import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Covid19DetailsPageRoutingModule } from './covid19-details-routing.module';

import { Covid19DetailsPage } from './covid19-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Covid19DetailsPageRoutingModule
  ],
  declarations: [Covid19DetailsPage]
})
export class Covid19DetailsPageModule {}
