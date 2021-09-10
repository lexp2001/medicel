import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.page.html',
  styleUrls: ['./question3.page.scss'],
})
export class Question3Page implements OnInit {

  constructor(private router: Router) { }

  goQuestion4(){
    this.router.navigate(['/question4'])
  }

  goHome(){
    this.router.navigate(['/main/home'])
  }
  ngOnInit() {
  }

}
