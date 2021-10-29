import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loginscreen',
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
    path: 'screen-events-details',
    loadChildren: () => import('./screens/screen-events-details/screen-events-details.module').then( m => m.ScreenEventsDetailsPageModule)
  },

  {
    path: 'publicity',
    loadChildren: () => import('./screens/publicity/publicity.module').then( m => m.PublicityPageModule)
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
