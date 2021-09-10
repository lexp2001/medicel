import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid19-details',
  templateUrl: './covid19-details.page.html',
  styleUrls: ['./covid19-details.page.scss'],
})
export class Covid19DetailsPage implements OnInit {

  constructor(private router: Router) { }


  goHome(){
    this.router.navigate(['/main/home'])
  }

  ngOnInit() {
  }

}
