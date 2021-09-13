import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {LoadingController} from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.page.html',
  styleUrls: ['./events-details.page.scss'],
})
export class EventsDetailsPage implements OnInit {

  constructor(
    private router: Router,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController) { 
     
    }


  goHome(){
    this.router.navigate(['/main/home']) 
  }

  ngOnInit() {
    this.loadMap();
  }

  async loadMap(){
    const loading = await this.loadingCtrl.create();
    loading.present();
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    const mapEle: HTMLElement = document.getElementById('map');
    const map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.EventsDetailsPage
    .addListenerOnce(map, 'idle', () => {
     loading.dismiss();
     const marker = new google.maps.Marker({
       position:{
         lat: myLatLng.lat,
         lng: myLatLng.lng
       },
       map: map,
       title: 'Hello World'
     });
    });
   
  }

}
