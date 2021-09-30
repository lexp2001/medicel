import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../../services/participant-shared.service'

@Component({
  selector: 'app-sanform5',
  templateUrl: './sanform5.page.html',
  styleUrls: ['../../personal-information.page.scss'],
})
export class SanForm5Page implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,) { }


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
