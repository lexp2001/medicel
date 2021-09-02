import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssistControlPage } from './assist-control.page';

const routes: Routes = [
  {
    path: '',
    component: AssistControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssistControlPageRoutingModule {}
