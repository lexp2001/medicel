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

    checkq2(): string {
      var resp = this.participant.participantData.covid[1].filter( (f: boolean)=> {
        return f == true
      }).length
      if (resp == 0 ) {
        return "No"
      } else {
        return `Si, ${resp} síntomas`
      }
    }

    checkq3(): string {
      if (this.participant.participantData.covid[2]==true) {
        return "Aceptado"
      } else {
        return ""
      }
    }

    ngOnInit() {
      this.participant = this.participantSharedService
    }

}
