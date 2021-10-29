import { AfterContentChecked, Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { ParticipantSharedService } from '../services/participant-shared.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements AfterContentChecked, OnInit{
  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: true
  };
  participant: any

  constructor(
    private router: Router,
    private participantSharedService: ParticipantSharedService,
    ) {}

  goEventsDetails() {
    this.router.navigate(['/main/events/events-details'])
  }

  ngAfterContentChecked(){
    if (this.swiper) {
      this.swiper.updateSwiper({});
    }
  } 

  ngOnInit() {
    this.participant = this.participantSharedService
  }

}


