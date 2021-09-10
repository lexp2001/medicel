import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: 'code.page.html',
  styleUrls: ['code.page.scss']
})
export class CodePage {

  constructor(private router: Router) { }

  goHome(){
    this.router.navigate(['/main/home'])
  }

}
