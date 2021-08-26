import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question6',
  templateUrl: './question6.page.html',
  styleUrls: ['./question6.page.scss'],
})
export class Question6Page implements OnInit {

  constructor(private router: Router) { }

  goQuestion7(){
    this.router.navigate(['/question7'])
  }

  ngOnInit() {
  }

}
