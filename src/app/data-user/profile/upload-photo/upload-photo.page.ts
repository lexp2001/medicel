import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.page.html',
  styleUrls: ['./upload-photo.page.scss'],
})
export class UploadPhotoPage implements OnInit {

  public uploadedImgUrl = ""
  constructor(private router: Router)  { }

  onClickCLose(){
    this.router.navigate(['/main/personal/profile'])
  }

  goPersonalInformation(){
    this.router.navigate(['/main/personal/profile'])
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.uploadedImgUrl = event.target.result as string;
      }
    }
}

  ngOnInit() {
  }

}
