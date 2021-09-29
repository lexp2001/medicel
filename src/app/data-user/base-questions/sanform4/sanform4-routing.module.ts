import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanForm4Page } from './sanform4.page';

const routes: Routes = [
  {
    path: '',
    component: SanForm4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanForm4PageRoutingModule {}
