import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalInformationPageRoutingModule } from './personal-information-routing.module';

import { PersonalInformationPage } from './personal-information.page';
import { BaseQuestionsComponent } from './base-questions/base-questions.component'
import { CovidQuestionsComponent } from './covid-questions/covid-questions.component'

import { ProfileComponent } from './profile/profile.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalInformationPageRoutingModule,

  ],
  declarations: [
    PersonalInformationPage, 
    BaseQuestionsComponent,
    CovidQuestionsComponent,
    ProfileComponent]
})
export class PersonalInformationPageModule {}
