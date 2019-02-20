import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contacto } from "../interfaces/contacto.interface";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  fireUrl: string = "https://agendacontactos-ce9c1.firebaseio.com/Contactos.json"
  contactoUrl: string = "https://agendacontactos-ce9c1.firebaseio.com/Contactos/"
  constructor(private http: HttpClient) {
  }

  createContacto(contacto: Contacto) {
    let body = JSON.stringify(contacto);
    const headers = new HttpHeaders({
      'Content-Type': 'application/JSON'
    });
    return this.http.post(this.fireUrl, body, { headers }).map(resp => {
      return resp
    })
  }

  readContacto(key: string) {
    let url = `${this.contactoUrl}/${key}.json`
    return this.http.get(url).map(resp => {
      return resp;
    })
  }

  readContactos() {
    return this.http.get(this.fireUrl).map(resp => {
      return resp;
    })
  }

  updateContacto(contacto: Contacto, key: string) {
    let body = JSON.stringify(contacto);
    let url = `${this.contactoUrl}/${key}.json`
    const headers = new HttpHeaders({
      'Content-Type': 'application/JSON'
    });
    return this.http.put(url, body, { headers }).map(resp => {
      return resp
    })
  }

  deleteContacto(key: String) {
    let url = `${this.contactoUrl}/${key}.json`;
    return this.http.delete(url).map(resp => {
      return resp;
    })
  }
}
