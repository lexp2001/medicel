import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../../services/participant-shared.service'

@Component({
  selector: 'app-sanform4',
  templateUrl: './sanform4.page.html',
  styleUrls: ['../../personal-information.page.scss'],
})
export class SanForm4Page implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,) { }

  goQ4(){
    if (this.participant.participantData.questions[2]=="No") {
      this.router.navigate(['/main/personal/questions'])
    } else {
      this.router.navigate(['/main/health/question5'])
    }
  }

  goHome(){
    this.router.navigate(['/main/home'])
  }

  onClickCLose(){
    this.router.navigate(['/main/personal/questions'])
  }

  ngOnInit() {
    this.participant = this.participantSharedService
  }

}
