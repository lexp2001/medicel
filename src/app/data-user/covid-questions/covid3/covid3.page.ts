import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid3',
  templateUrl: './covid3.page.html',
  styleUrls: ['./covid3.page.scss'],
})
export class Covid3Page implements OnInit {

  constructor(private router: Router) { }

  onClickCLose(){
    this.router.navigate(['/main/personal/covid'])
  }

  goHome() {
    this.router.navigate(['main/home'])
  }
  

  ngOnInit() {
  }

}
