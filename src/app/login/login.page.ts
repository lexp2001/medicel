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
  goEmail(){
    this.participant["isNew"] = true
    this.router.navigate(['/email'])
  }


  ngOnInit() {
    this.participant = this.participantSharedService
  }

}
