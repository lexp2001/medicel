import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
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
    path: 'age',
    loadChildren: () => import('./form/age/age.module').then( m => m.AgePageModule)
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
    path: 'question1',
    loadChildren: () => import('./questions/question1/question1.module').then( m => m.Question1PageModule)
  },
  {
    path: 'question2',
    loadChildren: () => import('./questions/question2/question2.module').then( m => m.Question2PageModule)
  },
  {
    path: 'question3',
    loadChildren: () => import('./questions/question3/question3.module').then( m => m.Question3PageModule)
  },
  {
    path: 'question4',
    loadChildren: () => import('./questions/question4/question4.module').then( m => m.Question4PageModule)
  },
  {
    path: 'question6',
    loadChildren: () => import('./questions/question6/question6.module').then( m => m.Question6PageModule)
  },
  {
    path: 'question7',
    loadChildren: () => import('./questions/question7/question7.module').then( m => m.Question7PageModule)
  },
  {
    path: 'question8',
    loadChildren: () => import('./questions/question8/question8.module').then( m => m.Question8PageModule)
  },
  {
    path: 'question9',
    loadChildren: () => import('./questions/question9/question9.module').then( m => m.Question9PageModule)
  },
  {
    path: 'question10',
    loadChildren: () => import('./questions/question10/question10.module').then( m => m.Question10PageModule)
  },
  {
    path: 'question5',
    loadChildren: () => import('./questions/question5/question5.module').then( m => m.Question5PageModule)
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
    loadChildren: () => import('./questions/assist-control/assist-control.module').then( m => m.AssistControlPageModule)
  },
  {
    path: 'publicity2',
    loadChildren: () => import('./screens/publicity2/publicity2.module').then( m => m.Publicity2PageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./screens/schedule/schedule.module').then( m => m.SchedulePageModule)
  },  {
    path: 'cal-modal',
    loadChildren: () => import('./pages/cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  },


 
  
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
