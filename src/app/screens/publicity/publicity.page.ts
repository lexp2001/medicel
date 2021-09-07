import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.page.html',
  styleUrls: ['./publicity.page.scss'],
})
export class PublicityPage implements OnInit {

  public counter = 10 

  constructor(private router: Router) { }


  ngOnInit() {

    console.info("Set init")

    var i = setInterval(t =>{ 
      this.counter--; 
      console.info(this.counter)
      if(this.counter==0) {
        clearInterval(i);
        this.router.navigate(['tabs/home'])
      }
    }, 1000);

    

  }

}
