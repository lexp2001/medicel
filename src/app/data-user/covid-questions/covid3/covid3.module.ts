import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Covid3PageRoutingModule } from './covid3-routing.module';

import { Covid3Page } from './covid3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Covid3PageRoutingModule
  ],
  declarations: [Covid3Page]
})
export class Covid3PageModule {}
