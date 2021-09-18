import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {

  constructor(private router: Router) { }

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


 

  ngOnInit() {
  }

}
