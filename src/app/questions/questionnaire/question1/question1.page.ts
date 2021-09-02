import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.page.html',
  styleUrls: ['./question1.page.scss'],
})
export class Question1Page implements OnInit {

  constructor(private router: Router) { }

  goQuestion2(){
    this.router.navigate(['/question2'])
  }
  ngOnInit() {
  }

}
