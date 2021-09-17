import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.page.html',
  styleUrls: ['./telephone.page.scss'],
})
export class TelephonePage implements OnInit {

  constructor(private router: Router) { }

  goStreetAddress(){
    this.router.navigate(['/street-address'])
  }

  goLogin(){
    this.router.navigate(['/login'])
  }

  ngOnInit() {
  }

}
