import { Covid19FormService } from './../../../services/covid19-form.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-covid1',
  templateUrl: './covid1.page.html',
  styleUrls: ['./covid1.page.scss'],
})
export class Covid1Page implements OnInit {

  covid19: any
 

  constructor(private router: Router,
    private Covid19FormService: Covid19FormService) { }

  goCovid2(){
    this.router.navigate(['/covid2'])
  }

  goHome(){
    this.router.navigate(['/main/home'])
  }
  ngOnInit() {
    this.covid19 = this.Covid19FormService
    console.info(this.covid19)
  }

}
