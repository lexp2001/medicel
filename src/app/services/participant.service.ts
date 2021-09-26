import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ParticipantInterface } from '../interfaces/participant.interface'
@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  private _email: string;
  private _password: string;
  private _name: string;
  private _rut: string;
  private _birthday: string;
  private _phone: string;
  private _comunity: string
  private _street: string

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }


  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get birthday() {
    return this._birthday;
  }

  get name() {
    return this._name;
  }

  get rut() {
    return this._rut;
  }

  get phone() {
    return this._phone;
  }

  get comunity() {
    return this._comunity;
  }

  get street() {
    return this._street;
  }

  set email(email: string) {
    this._email = email;
  }

  set password(password: string) {
    this._password = password;
  }

  set name(name: string) {
    this._name = name;
  }

  set birthday(birthday: string) {
    this._birthday = birthday;
  }

  set rut(rut: string) {
    this._rut = rut;
  }

  set phone(phone: string) {
    this._phone = phone
  }

  set comunity(comunity: string) {
    this._comunity = comunity
  }

  set street(street: string) {
    this._street = street
  }


    createParticipant(participant: ParticipantInterface): Observable<any> {
      console.info("createParticipant, vamos a ver que me muestran")
      return this.http.post<any>('https://medicelpro.azurewebsites.net/api/createparticipant' ,participant)
    }

}
