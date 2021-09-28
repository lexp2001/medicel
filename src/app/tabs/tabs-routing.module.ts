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
        path: 'personal',
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
        path: 'profile/name',
        loadChildren: () => import('../form/name/name.module').then( m => m.NamePageModule),
        pathMatch: 'full'
      },
      {
        path: 'profile/rut',
        loadChildren: () => import('../form/rut/rut.module').then( m => m.RutPageModule)
      },
      {
        path: 'profile/birth-date',
        loadChildren: () => import('../form/birth-date/birth-date.module').then( m => m.BirthDatePageModule)
      },
      {
        path: 'profile/email',
        loadChildren: () => import('../form/email/email.module').then( m => m.EmailPageModule)
      },
      {
        path: 'profile/telephone',
        loadChildren: () => import('../form/telephone/telephone.module').then( m => m.TelephonePageModule)
      },
      {
        path: 'profile/street-address',
        loadChildren: () => import('../form/street-address/street-address.module').then( m => m.StreetAddressPageModule)
      },
      {
        path: 'profile/com-domicile',
        loadChildren: () => import('../form/com-domicile/com-domicile.module').then( m => m.ComDomicilePageModule)
      },

      {
        path: 'profile/upload-qr',
        loadChildren: () => import('../form/upload-photo/upload-photo.module').then( m => m.UploadPhotoPageModule)
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
