import { Covid19FormService } from '../../../services/covid19-form.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../../services/participant-shared.service'

@Component({
  selector: 'app-covid1',
  templateUrl: './covid1.page.html',
  styleUrls: ['../../personal-information.page.scss'],
})
export class Covid1Page implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService
    ) { }

  goCovid2(){
    this.router.navigate(['main/covid/question2'])
  }

  goHome(){
    this.router.navigate(['/main/home'])
  }

  onClickCLose(){
    this.router.navigate(['/main/personal/covid'])
  }

  ngOnInit() {
    this.participant = this.participantSharedService
  }

}
