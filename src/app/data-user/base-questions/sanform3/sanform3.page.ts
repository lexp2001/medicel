import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sanform3',
  templateUrl: './sanform3.page.html',
  styleUrls: ['./sanform3.page.scss'],
})
export class SanForm3Page implements OnInit {

  constructor(private router: Router) { }

  goSanForm4(){
    this.router.navigate(['/sanform4'])
  }

  goHome(){
    this.router.navigate(['/main/home'])
  }
  ngOnInit() {
  }

}
