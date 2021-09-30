import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AzureBlobs } from 'src/app/services/azure-blobs.service';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.page.html',
  styleUrls: ['./upload-photo.page.scss'],
})
export class UploadPhotoPage implements OnInit {

  public uploadedImgUrl = ""
  sas = "sp=racwdl&st=2021-08-24T21:32:50Z&se=2023-01-01T05:32:50Z&spr=https&sv=2020-08-04&sr=c&sig=WHheDgFG%2F%2FUMMULVeGS2SAMjpomHyIBFh1lvMEscTOY%3D"

  constructor(
    private router: Router,
    private azureBlobsService: AzureBlobs
  ) { }

  onClickCLose() {
    this.router.navigate(['/main/personal/profile'])
  }

  goPersonalInformation() {
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

    let file = (event.target as HTMLInputElement).files![0];
    this.azureBlobsService.uploadImage(this.sas, file, file.name, () => { })
    console.info(file)
  }

  ngOnInit() {
  }

}
