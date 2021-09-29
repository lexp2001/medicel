import { SanFormService } from '../../../services/sanform.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sanform1',
  templateUrl: './sanform1.page.html',
  styleUrls: ['./sanform1.page.scss'],
})
export class SanForm1Page implements OnInit {

  SanForm: any

  constructor(private router: Router,
    private SanFormService: SanFormService)  { }

  goSanForm2(){
    this.router.navigate(['/sanform2'])
  }

  goHome(){
    this.router.navigate(['/main/home'])
  }
  
  ngOnInit() {
    this.SanForm = this.SanFormService
    console.info(this.SanFormService)
  }

}
