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
    this.router.navigate(['/street-address'])
  }

  goLogin(){
    this.router.navigate(['/login'])
  }

  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
  }

}
