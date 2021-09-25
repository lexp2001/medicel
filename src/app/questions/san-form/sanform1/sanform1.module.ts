import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanForm1PageRoutingModule } from './sanform1-routing.module';

import { SanForm1Page } from './sanform1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanForm1PageRoutingModule
  ],
  declarations: [SanForm1Page]
})
export class SanForm1PageModule {}
