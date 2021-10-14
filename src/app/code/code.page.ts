import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../services/participant-shared.service'

@Component({
  selector: 'app-code',
  templateUrl: 'code.page.html',
  styleUrls: ['code.page.scss']
})
export class CodePage implements OnInit{

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,
    ) {}

  goHome(){
    this.router.navigate(['/main/home'])
  }

  ngOnInit() {
    this.participant = this.participantSharedService
  }

}
