import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../services/participant-shared.service'

@Component({
  selector: 'app-com-domicile',
  templateUrl: './com-domicile.page.html',
  styleUrls: ['./com-domicile.page.scss'],
})
export class ComDomicilePage implements OnInit {

  participant: any
  
  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService
    ) { }

  goUpload(){
    this.router.navigate(['/upload-photo'])
  }
  goLogin(){
    this.router.navigate(['/login'])
  }
  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
  }

}
