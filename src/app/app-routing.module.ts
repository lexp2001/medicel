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
    loadChildren: () => import('./data-user/base-questions/sanform5/sanform5.module').then( m => m.SanForm5PageModule)
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
    path: 'assist-control',
    loadChildren: () => import('./data-user/base-questions/assist-control/assist-control.module').then( m => m.AssistControlPageModule)
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
