import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Covid1PageRoutingModule } from './covid1-routing.module';

import { Covid1Page } from './covid1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Covid1PageRoutingModule
  ],
  declarations: [Covid1Page]
})
export class Covid1PageModule {}
