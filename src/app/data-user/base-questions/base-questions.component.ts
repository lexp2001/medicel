import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../services/participant-shared.service'

@Component({
  selector: 'app-base-questions',
  templateUrl: './base-questions.component.html',
  styleUrls: ['../personal-information.page.scss']
})
export class BaseQuestionsComponent implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,

    ) { }

  goQ1() {
    this.router.navigate(['main/question1'])
  }

  goQ2() {
    this.router.navigate(['main/question2'])
  }

  goQ3() {
    this.router.navigate(['main/question3'])
  }

  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
  }

}
