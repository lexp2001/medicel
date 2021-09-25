import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanForm1Page } from './sanform1.page';

const routes: Routes = [
  {
    path: '',
    component: SanForm1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanForm1PageRoutingModule {}
