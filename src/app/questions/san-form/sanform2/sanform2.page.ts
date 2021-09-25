import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question2',
  templateUrl: './sanform2.page.html',
  styleUrls: ['./sanform2.page.scss'],
})
export class SanForm2Page implements OnInit {

  constructor(private router: Router) { }

  goQuestion3(){
    this.router.navigate(['/question3'])
  }

  goHome(){
    this.router.navigate(['/main/home'])
  }
  
  ngOnInit() {
  }

}
