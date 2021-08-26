import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birth-date',
  templateUrl: './birth-date.page.html',
  styleUrls: ['./birth-date.page.scss'],
})
export class BirthDatePage implements OnInit {

  constructor(private router: Router) { }

  goAge(){
    this.router.navigate(['/age'])
  }

  ngOnInit() {
  }

}
