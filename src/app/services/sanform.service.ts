import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SanFormService {

  private _sanform1: string;
  private _sanform2: string;
  private _sanform3: string;
  private _sanform4: string;
  private _sanform5: string;
 

  constructor() { }

  get sanform1() {
    return this._sanform1;
  }

  get sanform2() {
    return this._sanform2;
  }

  get sanform3() {
    return this._sanform3;
  }

  get sanform4() {
    return this._sanform4;
  }

  get sanform5() {
    return this._sanform5;
  }

  set sanform1(sanform1: string) {
    this._sanform1 = sanform1
  }

  set sanform2(sanform2: string) {
    this._sanform2 = sanform2
  }

  set sanform3(sanform3: string) {
    this._sanform3 = sanform3
  }

  set sanform4(sanform4: string) {
    this._sanform4 = sanform4
  }

  set sanform5(sanform5: string) {
    this._sanform5 = sanform5
  }

  
}
