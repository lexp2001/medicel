import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rut',
  templateUrl: './rut.page.html',
  styleUrls: ['./rut.page.scss'],
})
export class RutPage implements OnInit {

  constructor(private router: Router) { }

  goBirthDate(){
    this.router.navigate(['/birth-date'])
  }


  ngOnInit() {
  }

}
