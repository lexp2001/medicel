import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.page.html',
  styleUrls: ['./question5.page.scss'],
})
export class Question5Page implements OnInit {

  constructor(private router: Router) { }

  goQuestion6(){
    this.router.navigate(['/question6'])
  }
  ngOnInit() {
  }

}
