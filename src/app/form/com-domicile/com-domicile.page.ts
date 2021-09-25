import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantService } from '../../services/participant.service'

@Component({
  selector: 'app-com-domicile',
  templateUrl: './com-domicile.page.html',
  styleUrls: ['./com-domicile.page.scss'],
})
export class ComDomicilePage implements OnInit {

  participant: any
  
  constructor(
    private router: Router,
    private participantService: ParticipantService
    ) { }

  goUpload(){
    this.router.navigate(['/upload-photo'])
  }
  goLogin(){
    this.router.navigate(['/login'])
  }
  ngOnInit() {
    this.participant = this.participantService
    console.info(this.participant)
  }

}
