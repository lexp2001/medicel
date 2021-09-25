import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SanForm5Page } from './sanform5.page';

const routes: Routes = [
  {
    path: '',
    component: SanForm5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SanForm5PageRoutingModule {}
