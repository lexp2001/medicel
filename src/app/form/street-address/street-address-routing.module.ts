import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StreetAddressPage } from './street-address.page';

const routes: Routes = [
  {
    path: '',
    component: StreetAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreetAddressPageRoutingModule {}
