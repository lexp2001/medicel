import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComDomicilePage } from './com-domicile.page';

const routes: Routes = [
  {
    path: '',
    component: ComDomicilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComDomicilePageRoutingModule {}
