import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanForm2Page } from './sanform2.page';

const routes: Routes = [
  {
    path: '',
    component: SanForm2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanForm2PageRoutingModule {}
