import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Covid19DetailsPage } from './covid19-details.page';

const routes: Routes = [
  {
    path: '',
    component: Covid19DetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Covid19DetailsPageRoutingModule {}
