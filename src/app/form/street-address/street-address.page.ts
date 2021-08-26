import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-street-address',
  templateUrl: './street-address.page.html',
  styleUrls: ['./street-address.page.scss'],
})
export class StreetAddressPage implements OnInit {

  constructor(private router: Router) { }

  goComDomicile(){
    this.router.navigate(['/com-domicile'])
  }

  ngOnInit() {
  }

}
