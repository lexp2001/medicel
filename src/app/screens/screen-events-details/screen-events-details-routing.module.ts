import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScreenEventsDetailsPage } from './screen-events-details.page';

const routes: Routes = [
  {
    path: '',
    component: ScreenEventsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScreenEventsDetailsPageRoutingModule {}
