import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../services/participant-shared.service'

@Component({
  selector: 'app-covid-questions',
  templateUrl: './covid-questions.component.html',
  styleUrls: ['../personal-information.page.scss'],
})
export class CovidQuestionsComponent implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,

    ) { }

    goQ1() {
      this.router.navigate(['main/covid/question1'])
    }
  
    goQ2() {
      this.router.navigate(['main/covid/question2'])
    }
  
    goQ3() {
      this.router.navigate(['main/covid/question3'])
    }

    ngOnInit() {
      this.participant = this.participantSharedService
    }

}
