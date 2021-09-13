import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.page.html',
  styleUrls: ['./events-details.page.scss'],
})
export class EventsDetailsPage implements OnInit {

  constructor(private router: Router) { }

  goHome(){
    this.router.navigate(['/main/home'])
  }

  ngOnInit() {
  }

}
