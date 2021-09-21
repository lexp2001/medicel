import { PersonalInformationPage } from './../form/personal-information/personal-information.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'personalInformation',
        loadChildren: () => import('../form/personal-information/personal-information.module').then(m => m.PersonalInformationPageModule)
      },
      {
        path: 'events',
        loadChildren: () => import('../events/events.module').then(m => m.EventsPageModule)
      },
      {
        path: 'testeo',
        loadChildren: () => import('../testeo/testeo.module').then(m => m.TesteoPageModule)
      },
      {
        path: 'code',
        loadChildren: () => import('../code/code.module').then(m => m.CodePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
