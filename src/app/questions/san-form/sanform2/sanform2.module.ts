import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanForm2PageRoutingModule } from './sanform2-routing.module';

import { SanForm2Page } from './sanform2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanForm2PageRoutingModule
  ],
  declarations: [SanForm2Page]
})
export class SanForm2PageModule {}
