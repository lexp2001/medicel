import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-com-domicile',
  templateUrl: './com-domicile.page.html',
  styleUrls: ['./com-domicile.page.scss'],
})
export class ComDomicilePage implements OnInit {

  constructor(private router: Router) { }

  goPersonalInformation(){
    this.router.navigate(['/personal-information'])
  }

  ngOnInit() {
  }

}
