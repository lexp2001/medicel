import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit {

  constructor(private router: Router) { }

  goTelephone(){
    this.router.navigate(['/telephone'])
  }


  ngOnInit() {
  }

}
