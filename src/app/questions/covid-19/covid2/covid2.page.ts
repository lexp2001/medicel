import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid2',
  templateUrl: './covid2.page.html',
  styleUrls: ['./covid2.page.scss'],
})
export class Covid2Page implements OnInit {

  constructor(private router: Router) { }

  goCovid3(){
    this.router.navigate(['/covid3'])
  }
  goHome(){
    this.router.navigate(['/main/home'])
  }
  ngOnInit() {
  }

}
