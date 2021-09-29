import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../../services/participant-shared.service'

@Component({
  selector: 'app-street-address',
  templateUrl: './street-address.page.html',
  styleUrls: ['./street-address.page.scss'],
})
export class StreetAddressPage implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService
    ) { }

  goComDomicile(){
    this.router.navigate(['/main/profile/com-domicile'])
  }

  onClickCLose(){
    this.router.navigate(['/main/personal/profile'])
  }

  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
  }

}
