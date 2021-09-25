import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantService } from '../../services/participant.service'

@Component({
  selector: 'app-birth-date',
  templateUrl: './birth-date.page.html',
  styleUrls: ['./birth-date.page.scss'],
})
export class BirthDatePage implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantService: ParticipantService
    ) { }

  goAge(){
    this.router.navigate(['/telephone'])
  }
  goLogin(){
    this.router.navigate(['/login'])
  }
  ngOnInit() {
    this.participant = this.participantService
    console.info(this.participant)
  }

}
