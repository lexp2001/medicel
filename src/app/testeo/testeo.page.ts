import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testeo',
  templateUrl: 'testeo.page.html',
  styleUrls: ['testeo.page.scss']
})
export class TesteoPage {

  constructor(private router: Router) { }

  goHome(){
    this.router.navigate(['/main/home'])
  }

}
