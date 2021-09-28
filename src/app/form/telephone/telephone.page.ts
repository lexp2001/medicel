import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../services/participant-shared.service'

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.page.html',
  styleUrls: ['./telephone.page.scss'],
})
export class TelephonePage implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService
    ) { }

  goStreetAddress(){
    this.router.navigate(['/main/profile/street-address'])
  }

  onClickCLose(){
    this.router.navigate(['/main/personal/profile'])
  }

  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
  }

}
