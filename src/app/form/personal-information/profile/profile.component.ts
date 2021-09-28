import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../../services/participant-shared.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../personal-information.page.scss'],
})
export class ProfileComponent implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,

    ) { }

    goHome() {
      this.router.navigate(['main/home'])
    }
  
    goName() {
      this.router.navigate(['main/profile/name'])
    }
  
  
    goRut() {
      this.router.navigate(['main/profile/rut'])
    }
  
    goEmail() {
      this.router.navigate(['main/profile/email'])
    }
  
    goBirthdate() {
      this.router.navigate(['main/profile/birth-date'])
    }
  
    goTelephone() {
      this.router.navigate(['main/profile/telephone'])
    }
  
    goStreetAddress() {
      this.router.navigate(['main/profile/street-address'])
    }
  
    goComDomicile() {
      this.router.navigate(['main/profile/com-domicile'])
    }

    goUploadQR() {
      this.router.navigate(['/main/profile/upload-qr'])
    }

  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
  }

}
