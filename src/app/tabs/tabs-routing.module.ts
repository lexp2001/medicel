import { PersonalInformationPage } from '../data-user/personal-information.page';
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
        path: 'personal',
        loadChildren: () => import('../data-user/personal-information.module').then(m => m.PersonalInformationPageModule)
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
        path: 'profile/name',
        loadChildren: () => import('../data-user/profile/name/name.module').then( m => m.NamePageModule),
        pathMatch: 'full'
      },
      {
        path: 'profile/rut',
        loadChildren: () => import('../data-user/profile/rut/rut.module').then( m => m.RutPageModule)
      },
      {
        path: 'profile/birth-date',
        loadChildren: () => import('../data-user/profile/birth-date/birth-date.module').then( m => m.BirthDatePageModule)
      },
      {
        path: 'profile/email',
        loadChildren: () => import('../data-user/profile/email/email.module').then( m => m.EmailPageModule)
      },
      {
        path: 'profile/telephone',
        loadChildren: () => import('../data-user/profile/telephone/telephone.module').then( m => m.TelephonePageModule)
      },
      {
        path: 'profile/street-address',
        loadChildren: () => import('../data-user/profile/street-address/street-address.module').then( m => m.StreetAddressPageModule)
      },
      {
        path: 'profile/com-domicile',
        loadChildren: () => import('../data-user/profile/com-domicile/com-domicile.module').then( m => m.ComDomicilePageModule)
      },

      {
        path: 'profile/upload-qr',
        loadChildren: () => import('../data-user/profile/upload-photo/upload-photo.module').then( m => m.UploadPhotoPageModule)
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
