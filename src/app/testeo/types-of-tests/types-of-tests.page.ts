import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-types-of-tests',
  templateUrl: './types-of-tests.page.html',
  styleUrls: ['./types-of-tests.page.scss'],
})
export class TypesOfTestsPage implements OnInit {

  constructor(private router: Router) { }

  goTesteo(){
    this.router.navigate(['/main/testeo'])
  }

  goDate(){
    this.router.navigate(['/main/testeo/types-of-tests/date-time-tests'])
  }
  ngOnInit() {
  }

}
