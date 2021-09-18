import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypesOfTestsPageRoutingModule } from './types-of-tests-routing.module';

import { TypesOfTestsPage } from './types-of-tests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypesOfTestsPageRoutingModule
  ],
  declarations: [TypesOfTestsPage]
})
export class TypesOfTestsPageModule {}
