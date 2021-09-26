import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantService } from '../../services/participant.service'

@Component({
  selector: 'app-street-address',
  templateUrl: './street-address.page.html',
  styleUrls: ['./street-address.page.scss'],
})
export class StreetAddressPage implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantService: ParticipantService
    ) { }

  goComDomicile(){
    this.router.navigate(['/com-domicile'])
  }

  goLogin(){
    this.router.navigate(['/login'])
  }

  ngOnInit() {
    this.participant = this.participantService
    console.info(this.participant)
  }

}
