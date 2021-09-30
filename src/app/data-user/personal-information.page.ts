import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../services/participant-shared.service'
import { ParticipantInterface } from '../interfaces/participant.interface'
import { ParticipantService } from '../services/participant.service'
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss']
})
export class PersonalInformationPage implements OnInit {

  participant: any
  currentDataTab = "profile"

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,
    private participantService: ParticipantService,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) { }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Guardando datos...'
    });
    await loading.present();
  }

  onClickCLose() {
    this.router.navigate(['/main/home'])
  }


  goTab(tab: string) {
    this.router.navigate([`/main/personal/${tab}`])
  }

  saveParticipant() {
    this.presentLoading()
    if (this.participant["_isNew"]) {
      this.participantService.createParticipant(this.participant["participantData"]).
        subscribe(data => {
          console.info(data)
          this.loadingController.dismiss()
        })
    } else {
      this.participantService.updateParticipant(this.participant["participantData"]).
        subscribe(data => {
          console.info(data)
          this.loadingController.dismiss()
        })
    }

  }


  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
    this.currentDataTab = "profile"
    this.goTab('profile')
  }

}
