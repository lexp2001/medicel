import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {

  constructor(private router: Router) { }

  goTab1(){
    //this.router.navigate(['/tabs/tab1'])
    this.router.navigate(['/publicity'])
    
  }

  ngOnInit() {
  }

}
