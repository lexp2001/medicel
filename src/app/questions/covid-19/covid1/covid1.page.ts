import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid1',
  templateUrl: './covid1.page.html',
  styleUrls: ['./covid1.page.scss'],
})
export class Covid1Page implements OnInit {

  constructor(private router: Router) { }

  goCovid2(){
    this.router.navigate(['/covid2'])
  }

  goHome(){
    this.router.navigate(['/main/home'])
  }
  ngOnInit() {
  }

}
