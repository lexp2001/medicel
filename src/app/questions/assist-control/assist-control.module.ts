import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssistControlPageRoutingModule } from './assist-control-routing.module';

import { AssistControlPage } from './assist-control.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssistControlPageRoutingModule
  ],
  declarations: [AssistControlPage]
})
export class AssistControlPageModule {}
