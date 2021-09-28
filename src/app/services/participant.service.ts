import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    return this.http
      .get<any>('https://medicelpro.azurewebsites.net/api/getParticipantByRut/' + rut )
      .pipe(
        catchError(error => {
            let errorMsg: string;
            if (error.error instanceof ErrorEvent) {
                errorMsg = `Error: ${error.error.message}`;
            } else {
                errorMsg = `Error: ${error.error}`;
            }

            return throwError(errorMsg);
        })
    );
  }

  getParticipantByEmail(email: string): Observable<ParticipantInterface> {
    return this.http.get<ParticipantInterface>('https://medicelpro.azurewebsites.net/api/getParticipantByEmail/' + email )
  }

  updateParticipant(participant: ParticipantInterface): Observable<any> {
    return this.http.put<any>('https://medicelpro.azurewebsites.net/api/updateParticipantByRut/' + participant.rut ,participant)
  }

}

