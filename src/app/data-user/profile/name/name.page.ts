import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../../services/participant-shared.service'

@Component({
  selector: 'app-name',
  templateUrl: './name.page.html',
  styleUrls: ['../../personal-information.page.scss']
})
export class NamePage implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService
    ) { }

  goRut(){
    this.router.navigate(['/main/profile/rut'])
  }

  
  onClickClose(){
    this.router.navigate(['/main/personal/profile'])
  }

  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
  }

}
