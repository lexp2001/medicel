import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Covid19FormService {

  private _covid1: string;
  private _covid2: string;
  private _covid3: string;
 

  constructor() { }

  get covid1() {
    return this._covid1;
  }

  get covid2() {
    return this._covid1;
  }

  get covid3() {
    return this._covid1;
  }
  

  set covid1(covid1: string) {
    this._covid1 = covid1;
  }

  set covid2(covid2: string) {
    this._covid2 = covid2;
  }

  set covid3(covid3: string) {
    this._covid3 = covid3;
  }




  
}
