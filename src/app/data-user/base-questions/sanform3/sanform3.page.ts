import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../../services/participant-shared.service'

@Component({
  selector: 'app-sanform3',
  templateUrl: './sanform3.page.html',
  styleUrls: ['../../personal-information.page.scss'],
})
export class SanForm3Page implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,) { }

  goSanForm4(){
    this.router.navigate(['/sanform4'])
  }

  goHome(){
    this.router.navigate(['/main/home'])
  }

  onClickCLose(){
    this.router.navigate(['/main/personal/questions'])
  }

  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
  }

}
