import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question10',
  templateUrl: './question10.page.html',
  styleUrls: ['./question10.page.scss'],
})
export class Question10Page implements OnInit {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['tabs/home'])
  }

  ngOnInit() {
  }

}
