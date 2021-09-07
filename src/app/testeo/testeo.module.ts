import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TesteoPage } from './testeo.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TesteoPageRoutingModule } from './testeo-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: TesteoPage }]),
    TesteoPageRoutingModule,
  ],
  declarations: [TesteoPage]
})
export class TesteoPageModule {}
