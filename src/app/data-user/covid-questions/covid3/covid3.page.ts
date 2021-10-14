import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../../services/participant-shared.service'

@Component({
  selector: 'app-covid3',
  templateUrl: './covid3.page.html',
  styleUrls: ['../../personal-information.page.scss'],
})
export class Covid3Page implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,) { }

  onClickCLose(){
    this.router.navigate(['/main/personal/covid'])
  }

  goHome() {
    this.router.navigate(['main/home'])
  }
  

  ngOnInit() {
    this.participant = this.participantSharedService
  }

}
