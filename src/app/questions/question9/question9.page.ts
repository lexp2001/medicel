import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question9',
  templateUrl: './question9.page.html',
  styleUrls: ['./question9.page.scss'],
})
export class Question9Page implements OnInit {

  constructor(private router: Router) { }

  goQuestion10(){
    this.router.navigate(['/question10'])
  }

  ngOnInit() {
  }

}
