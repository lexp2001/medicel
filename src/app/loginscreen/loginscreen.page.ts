import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../services/participant-shared.service'
import { ParticipantService } from '../services/participant.service'

import { ParticipantInterface } from '../interfaces/participant.interface'

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss']
})
export class LoginscreenPage implements OnInit {

  userEmail: string
  userPass: string
  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,
    private participantService: ParticipantService
    ) { }

  onCLickEnter(){
    console.info(this.userEmail)
    this.participantService.getParticipantByEmail(this.userEmail).
      subscribe(data => {
        console.info(data)
        this.participant["participantData"] = data
      })
    this.router.navigate(['/main/home'])
  }

  ngOnInit() {
    this.participant = this.participantSharedService

    

    console.info(this.participant)
  }

}
