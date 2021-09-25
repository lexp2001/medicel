import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantService } from '../../services/participant.service'

@Component({
  selector: 'app-name',
  templateUrl: './name.page.html',
  styleUrls: ['./name.page.scss'],
})
export class NamePage implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantService: ParticipantService
    ) { }

  goRut(){
    this.router.navigate(['/rut'])
  }
  
  goLogin(){
    this.router.navigate(['/login'])
  }

  ngOnInit() {
    this.participant = this.participantService
    console.info(this.participant)
  }

}
