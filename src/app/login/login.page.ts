import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../services/participant-shared.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,
    ){}

  goLoginscreen(){
    this.participant["isNew"] = false
    this.router.navigate(['/loginscreen'])
  }
  goUserData(){
    this.participant["isNew"] = true
    this.router.navigate(['/main/profile/name'])
  }


  ngOnInit() {
    this.participant = this.participantSharedService
  }

}
