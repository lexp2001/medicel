import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParticipantSharedService } from '../services/participant-shared.service'
import { ParticipantService } from '../services/participant.service'
import { ToastController } from '@ionic/angular';
import { ParticipantInterface } from '../interfaces/participant.interface'

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss']
})
export class LoginscreenPage implements OnInit {

  userEmail: string
  userPass: string
  participant: any

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
      message: 'Cargando datos...'
    });
    await loading.present();
  }

  onCLickEnter(){
    console.info(this.userEmail)
    this.presentLoading()
    this.participantService.getParticipantByEmail(this.userEmail).
      subscribe(data => {
        console.info(data)
        this.participant["participantData"] = data
        this.participant["isNew"] = false
        this.router.navigate(['/main/home'])
        this.loadingController.dismiss()
      }, (error) => {
        // handle the error here, show some alerts, warnings, etc
        console.log(error)
        this.loadingController.dismiss()
        if (error.status == 404) {
          this.presentToast("Usuario o Contraseña inválida")
        } else {
          this.presentToast("Problema de conexión, por favor intente más tarde")
        }
        
    })
    
  }

  goUserData(){
    this.participant["isNew"] = true
    this.router.navigate(['/main/profile/name'])
  }

  

  ngOnInit() {
    this.participant = this.participantSharedService
    console.info(this.participant)
  }

}
