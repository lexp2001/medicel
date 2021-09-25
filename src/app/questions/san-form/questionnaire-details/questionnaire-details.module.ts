import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionnaireDetailsPageRoutingModule } from './questionnaire-details-routing.module';

import { QuestionnaireDetailsPage } from './questionnaire-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionnaireDetailsPageRoutingModule
  ],
  declarations: [QuestionnaireDetailsPage]
})
export class QuestionnaireDetailsPageModule {}
