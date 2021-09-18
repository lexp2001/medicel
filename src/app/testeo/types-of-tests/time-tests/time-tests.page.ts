import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-tests',
  templateUrl: './time-tests.page.html',
  styleUrls: ['./time-tests.page.scss'],
})
export class TimeTestsPage implements OnInit {

  constructor(private router: Router) { }

  goTesteo(){
    this.router.navigate(['/main/testeo'])
  }

  ngOnInit() {
  }

}
