import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ParticipantInterface } from '../interfaces/participant.interface'

@Injectable({
  providedIn: 'root'
})

export class ParticipantService {

  constructor(
    private http: HttpClient
  ) { }



  createParticipant(participant: ParticipantInterface): Observable<any> {
    return this.http.post<any>('https://medicelpro.azurewebsites.net/api/createparticipant' ,participant)
  }

  getParticipantByRut(rut: string): Observable<any> {
    return this.http.get<any>('https://medicelpro.azurewebsites.net/api/getParticipantByRut/' + rut )
  }

  getParticipantByEmail(email: string): Observable<any> {
    return this.http.get<any>('https://medicelpro.azurewebsites.net/api/getParticipantByEmail/' + email )
  }

}

