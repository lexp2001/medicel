import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeTestsPage } from './time-tests.page';

const routes: Routes = [
  {
    path: '',
    component: TimeTestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeTestsPageRoutingModule {}
