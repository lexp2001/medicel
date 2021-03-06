import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Covid2Page } from './covid2.page';

const routes: Routes = [
  {
    path: '',
    component: Covid2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Covid2PageRoutingModule {}
