import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-date-time-tests',
  templateUrl: './date-time-tests.page.html',
  styleUrls: ['./date-time-tests.page.scss'],
})
export class DateTimeTestsPage implements OnInit {

  constructor(private router: Router) { }

  goTesteo(){
    this.router.navigate(['/main/testeo'])
  }

  goTime(){
    this.router.navigate(['/main/testeo/types-of-tests/time-tests'])
  }

  

  ngOnInit() {
  }

}
