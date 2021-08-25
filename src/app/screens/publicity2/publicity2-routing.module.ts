import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Publicity2Page } from './publicity2.page';

const routes: Routes = [
  {
    path: '',
    component: Publicity2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Publicity2PageRoutingModule {}
