import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../../services/participant-shared.service'
import { ParticipantInterface } from '../../interfaces/participant.interface'
import { ParticipantService } from '../../services/participant.service'

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss']
})
export class PersonalInformationPage implements OnInit {

  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,
    private participantService: ParticipantService
    ) { }

  goHome() {
    this.router.navigate(['main/home'])
  }

  goName() {
    this.router.navigate(['name'])
  }


  goRut() {
    this.router.navigate(['rut'])
  }

  goEmail() {
    this.router.navigate(['email'])
  }

  goBirthdate() {
    this.router.navigate(['birth-date'])
  }

  goTelephone() {
    this.router.navigate(['telephone'])
  }

  goStreetAddress() {
    this.router.navigate(['street-address'])
  }


  goComDomicile() {
    this.router.navigate(['com-domicile'])
  }

  saveParticipant(part: any){
    console.info(part)
    let parti: ParticipantInterface = {
      birthday: part._birthday,
      email: part._email,
      comunity: part._comunity,
      name: part._name,
      phone: part._phone,
      rut: part._rut,
      street: part._street
    }
    this.participantService.createParticipant(parti).
      subscribe(data => {
        console.info(data)
      })
  }
 

  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
  }

}
