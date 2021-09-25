import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sanform5',
  templateUrl: './sanform5.page.html',
  styleUrls: ['./sanform5.page.scss'],
})
export class SanForm5Page implements OnInit {

  constructor(private router: Router) { }

  goQuestion6(){
    this.router.navigate(['/question6'])
  }
  goHome(){
    this.router.navigate(['/main/home'])
  }
  ngOnInit() {
  }

}
