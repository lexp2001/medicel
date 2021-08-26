import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assist-control',
  templateUrl: './assist-control.page.html',
  styleUrls: ['./assist-control.page.scss'],
})
export class AssistControlPage implements OnInit {

  constructor(private router: Router) { }

  goQuestion1(){
    this.router.navigate(['/question1'])
  }

  ngOnInit() {
  }

}
