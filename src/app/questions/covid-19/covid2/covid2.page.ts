import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid2',
  templateUrl: './covid2.page.html',
  styleUrls: ['./covid2.page.scss'],
})
export class Covid2Page implements OnInit {

  constructor(private router: Router) { }

  goQuestion10(){
    this.router.navigate(['/question10'])
  }
  goHome(){
    this.router.navigate(['/main/home'])
  }
  ngOnInit() {
  }

}
