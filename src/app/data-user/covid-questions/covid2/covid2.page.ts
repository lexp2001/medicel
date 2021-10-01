import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../../services/participant-shared.service'

@Component({
  selector: 'app-covid2',
  templateUrl: './covid2.page.html',
  styleUrls: ['../../personal-information.page.scss'],
})
export class Covid2Page implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,) { }

  onClickCLose(){
    this.router.navigate(['/main/personal/covid'])
  }

  goCovid3(){
    this.router.navigate(['main/covid/question3'])
  }
  goHome(){
    this.router.navigate(['/main/home'])
  }
  
  ngOnInit() {
    this.participant = this.participantSharedService
  }

}
