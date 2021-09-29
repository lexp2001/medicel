import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.page.html',
  styleUrls: ['./upload-photo.page.scss'],
})
export class UploadPhotoPage implements OnInit {

  constructor(private router: Router)  { }

  onClickCLose(){
    this.router.navigate(['/main/personal/profile'])
  }

  goPersonalInformation(){
    this.router.navigate(['/main/personal/profile'])
  }

  ngOnInit() {
  }

}
