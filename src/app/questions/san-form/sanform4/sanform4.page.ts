import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sanform4',
  templateUrl: './sanform4.page.html',
  styleUrls: ['./sanform4.page.scss'],
})
export class SanForm4Page implements OnInit {

  constructor(private router: Router) { }

  goSanForm5(){
    this.router.navigate(['/sanform5'])
  }
  goHome(){
    this.router.navigate(['/main/home'])
  }
  ngOnInit() {
  }

}
