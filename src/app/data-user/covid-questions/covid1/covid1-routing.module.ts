import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Covid1Page } from './covid1.page';

const routes: Routes = [
  {
    path: '',
    component: Covid1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Covid1PageRoutingModule {}
