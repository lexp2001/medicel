import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../../services/participant-shared.service'

@Component({
  selector: 'app-question2',
  templateUrl: './sanform2.page.html',
  styleUrls: ['../../personal-information.page.scss'],
})
export class SanForm2Page implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,) { }

  goQ4(){
    this.router.navigate(['/main/health/question4'])
  }

  onClickCLose(){
    this.router.navigate(['/main/personal/questions'])
  }

  goHome(){
    this.router.navigate(['/main/home'])
  }
  
  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
  }

}
