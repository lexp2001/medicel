import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.page.html',
  styleUrls: ['./name.page.scss'],
})
export class NamePage implements OnInit {

  constructor(private router: Router) { }

  goRut(){
    this.router.navigate(['/rut'])
  }

  ngOnInit() {
  }

}
