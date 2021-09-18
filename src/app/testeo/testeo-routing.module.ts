import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesteoPage } from './testeo.page';

const routes: Routes = [
  {
    path: '',
    component: TesteoPage,
  },  {
    path: 'types-of-tests',
    loadChildren: () => import('./types-of-tests/types-of-tests.module').then( m => m.TypesOfTestsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesteoPageRoutingModule {}
