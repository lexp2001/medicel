import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../../services/participant-shared.service'

@Component({
  selector: 'app-birth-date',
  templateUrl: './birth-date.page.html',
  styleUrls: ['./birth-date.page.scss'],
})
export class BirthDatePage implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService
    ) { }

  goAge(){
    this.router.navigate(['/main/profile/telephone'])
  }
  onClickCLose(){
    this.router.navigate(['/main/personal/profile'])
  }
  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
  }

}
