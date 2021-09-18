import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateTimeTestsPage } from './date-time-tests.page';

const routes: Routes = [
  {
    path: '',
    component: DateTimeTestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateTimeTestsPageRoutingModule {}
