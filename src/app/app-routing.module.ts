import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loginscreen',
    loadChildren: () => import('./loginscreen/loginscreen.module').then( m => m.LoginscreenPageModule)
  },
  {
    path: 'name',
    loadChildren: () => import('./form/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'rut',
    loadChildren: () => import('./form/rut/rut.module').then( m => m.RutPageModule)
  },
  {
    path: 'birth-date',
    loadChildren: () => import('./form/birth-date/birth-date.module').then( m => m.BirthDatePageModule)
  },
  {
    path: 'telephone',
    loadChildren: () => import('./form/telephone/telephone.module').then( m => m.TelephonePageModule)
  },
  {
    path: 'street-address',
    loadChildren: () => import('./form/street-address/street-address.module').then( m => m.StreetAddressPageModule)
  },
  {
    path: 'com-domicile',
    loadChildren: () => import('./form/com-domicile/com-domicile.module').then( m => m.ComDomicilePageModule)
  },
  {
    path: 'sanform1',
    loadChildren: () => import('./questions/san-form/sanform1/sanform1.module').then( m => m.SanForm1PageModule)
  },
  {
    path: 'sanform2',
    loadChildren: () => import('./questions/san-form/sanform2/sanform2.module').then( m => m.SanForm2PageModule)
  },
  {
    path: 'sanform3',
    loadChildren: () => import('./questions/san-form/sanform3/sanform3.module').then( m => m.SanForm3PageModule)
  },
  {
    path: 'sanform4',
    loadChildren: () => import('./questions/san-form/sanform4/sanform4.module').then( m => m.SanForm4PageModule)
  },
  {
    path: 'covid1',
    loadChildren: () => import('./questions/covid-19/covid1/covid1.module').then( m => m.Covid1PageModule)
  },
  {
    path: 'covid2',
    loadChildren: () => import('./questions/covid-19/covid2/covid2.module').then( m => m.Covid2PageModule)
  },
  {
    path: 'covid3',
    loadChildren: () => import('./questions/covid-19/covid3/covid3.module').then( m => m.Covid3PageModule)
  },
  {
    path: 'sanform5',
    loadChildren: () => import('./questions/san-form/sanform5/sanform5.module').then( m => m.SanForm5PageModule)
  },
  {
    path: 'personal-information',
    loadChildren: () => import('./form/personal-information/personal-information.module').then( m => m.PersonalInformationPageModule)
  },

  {
    path: 'screen-events-details',
    loadChildren: () => import('./screens/screen-events-details/screen-events-details.module').then( m => m.ScreenEventsDetailsPageModule)
  },

  {
    path: 'publicity',
    loadChildren: () => import('./screens/publicity/publicity.module').then( m => m.PublicityPageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./form/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'assist-control',
    loadChildren: () => import('./questions/san-form/assist-control/assist-control.module').then( m => m.AssistControlPageModule)
  },
  {
    path: 'publicity2',
    loadChildren: () => import('./screens/publicity2/publicity2.module').then( m => m.Publicity2PageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./screens/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },
  {
    path: 'upload-photo',
    loadChildren: () => import('./screens/upload-photo/upload-photo.module').then( m => m.UploadPhotoPageModule)
  },
  {
    path: 'questionnaire-details',
    loadChildren: () => import('./questions/san-form/questionnaire-details/questionnaire-details.module').then( m => m.QuestionnaireDetailsPageModule)
  },
  {
    path: 'covid19-details',
    loadChildren: () => import('./questions/covid-19/covid19-details/covid19-details.module').then( m => m.Covid19DetailsPageModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('./chart/chart.module').then( m => m.ChartPageModule)
  }

 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
