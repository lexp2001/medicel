import { Injectable } from '@angular/core';
import { ParticipantInterface } from '../interfaces/participant.interface'

@Injectable({
  providedIn: 'root'
})
export class ParticipantSharedService {

  private _participantData: ParticipantInterface = {
    rut: "",
    name: "",
    email: "",
    phone: "",
    street: "",
    comunity: "",
    birthday: ""

  }
  private _isNew: boolean

  get participantData() {
    return this._participantData
  }

  set participantData(data: ParticipantInterface) {
    this._participantData = data
  }

  get isNew() {
    return this._isNew
  }

  set isNew(flag: boolean) {
    this._isNew = flag
  }

}

