import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question7',
  templateUrl: './question7.page.html',
  styleUrls: ['./question7.page.scss'],
})
export class Question7Page implements OnInit {

  constructor(private router: Router) { }

  goQuestion8(){
    this.router.navigate(['/question8'])
  }

  ngOnInit() {
  }

}
