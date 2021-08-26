import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  constructor(private router: Router) { }

  goName(){
    this.router.navigate(['/name'])
  }

  ngOnInit() {
  }

}
