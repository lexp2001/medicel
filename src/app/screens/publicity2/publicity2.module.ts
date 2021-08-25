import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Publicity2PageRoutingModule } from './publicity2-routing.module';

import { Publicity2Page } from './publicity2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Publicity2PageRoutingModule
  ],
  declarations: [Publicity2Page]
})
export class Publicity2PageModule {}
