import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanForm3PageRoutingModule } from './sanform3-routing.module';

import { SanForm3Page } from './sanform3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanForm3PageRoutingModule
  ],
  declarations: [SanForm3Page]
})
export class SanForm3PageModule {}
