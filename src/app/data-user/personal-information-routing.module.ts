import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInformationPage } from './personal-information.page';

import { ProfileComponent } from './profile/profile.component'
import { BaseQuestionsComponent } from './base-questions/base-questions.component'
import { CovidQuestionsComponent } from './covid-questions/covid-questions.component'
const routes: Routes = [
  {
    path: '',
    component: PersonalInformationPage,
    children: [
      
      {
        path: 'profile',
        component: ProfileComponent, 
      },
      {
        path: 'questions',
        component: BaseQuestionsComponent
      },
      {
        path: 'covid',
        component: CovidQuestionsComponent
      },
      {
        path: '',
        redirectTo: 'profile'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalInformationPageRoutingModule { }
