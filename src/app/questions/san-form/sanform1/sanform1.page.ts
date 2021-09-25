import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sanform1',
  templateUrl: './sanform1.page.html',
  styleUrls: ['./sanform1.page.scss'],
})
export class SanForm1Page implements OnInit {

  constructor(private router: Router) { }

  goQuestion2(){
    this.router.navigate(['/question2'])
  }

  goHome(){
    this.router.navigate(['/main/home'])
  }
  
  ngOnInit() {
  }

}
