import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteoPage } from './testeo.page';

const routes: Routes = [
  {
    path: '',
    component: TesteoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteoPageRoutingModule {}
