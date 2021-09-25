import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Covid3Page } from './covid3.page';

const routes: Routes = [
  {
    path: '',
    component: Covid3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Covid3PageRoutingModule {}
