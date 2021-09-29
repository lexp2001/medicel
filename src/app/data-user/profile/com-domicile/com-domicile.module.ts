import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComDomicilePageRoutingModule } from './com-domicile-routing.module';

import { ComDomicilePage } from './com-domicile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComDomicilePageRoutingModule
  ],
  declarations: [ComDomicilePage]
})
export class ComDomicilePageModule {}
