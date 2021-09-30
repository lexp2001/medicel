import { SanFormService } from '../../../services/sanform.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../../services/participant-shared.service'


@Component({
  selector: 'app-sanform1',
  templateUrl: './sanform1.page.html',
  styleUrls: ['../../personal-information.page.scss'],
})
export class SanForm1Page implements OnInit {

  SanForm: any
  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,
    private SanFormService: SanFormService) { }

  goQ2Q3() {
    if (this.participant.participantData.questions[0]=="Isapre") {
      this.router.navigate(['/main/question2'])
    } else {
      this.router.navigate(['/main/question3'])
    }
    
  }

  goQuestions() {
    this.router.navigate(['/main/personal/questions'])
  }

  onChange($event) {
    // console.info(this.participant.participantData.questions[0])
    // console.info($event)
    // if ($event=="") {

    // }
    this.participant.participantData.questions[1] = ""
  }

  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
  }

}
