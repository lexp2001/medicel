import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Covid2PageRoutingModule } from './covid2-routing.module';

import { Covid2Page } from './covid2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Covid2PageRoutingModule
  ],
  declarations: [Covid2Page]
})
export class Covid2PageModule {}
