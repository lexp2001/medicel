import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionnaireDetailsPage } from './questionnaire-details.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionnaireDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionnaireDetailsPageRoutingModule {}
