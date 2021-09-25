import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanForm5PageRoutingModule } from './sanform5-routing.module';

import { SanForm5Page } from './sanform5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanForm5PageRoutingModule
  ],
  declarations: [SanForm5Page]
})
export class SanForm5PageModule {}
