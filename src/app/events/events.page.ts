import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: 'events.page.html',
  styleUrls: ['events.page.scss']
})
export class EventsPage {

  constructor(private router: Router) { }

  goAssistControl(){
    this.router.navigate(['/assist-control'])
  }

}
