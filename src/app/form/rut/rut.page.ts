import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../services/participant-shared.service'

@Component({
  selector: 'app-rut',
  templateUrl: './rut.page.html',
  styleUrls: ['./rut.page.scss'],
})
export class RutPage implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService
    ) { }

  goBirthDate(){
    this.router.navigate(['/birth-date'])
  }
  
  goLogin(){
    this.router.navigate(['/login'])
  }

  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
  }

}
