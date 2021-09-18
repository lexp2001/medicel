import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypesOfTestsPage } from './types-of-tests.page';

const routes: Routes = [
  {
    path: '',
    component: TypesOfTestsPage
  },
  {
    path: 'date-time-tests',
    loadChildren: () => import('./date-time-tests/date-time-tests.module').then( m => m.DateTimeTestsPageModule)
  },
  {
    path: 'time-tests',
    loadChildren: () => import('./time-tests/time-tests.module').then( m => m.TimeTestsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypesOfTestsPageRoutingModule {}
