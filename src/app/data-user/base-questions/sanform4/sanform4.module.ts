import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanForm4PageRoutingModule } from './sanform4-routing.module';

import { SanForm4Page } from './sanform4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanForm4PageRoutingModule
  ],
  declarations: [SanForm4Page]
})
export class SanForm4PageModule {}
