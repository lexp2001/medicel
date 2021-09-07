import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodePage } from './code.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CodePageRoutingModule } from './code-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: CodePage }]),
    CodePageRoutingModule,
  ],
  declarations: [CodePage]
})
export class CodePageModule {}
