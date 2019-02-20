import { Component, OnInit } from '@angular/core';
import { ContactosService } from "../../services/contactos.service";
import { Router } from "@angular/router";
import { Contacto } from 'src/app/interfaces/contacto.interface';
@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styles: []
})
export class ContactosComponent implements OnInit {
  contactos: any[] = []
  loading: boolean = true;
  constructor(private router: Router, private _contactosService: ContactosService) {
    this._contactosService.readContactos().subscribe((data: any) => {
      this.contactos = data;
      this.loading = false;
      /*setTimeout(() => {
        this.loading = false
      }, 1000);*/
    })
  }

  deleteContacto(key: string) {
    this._contactosService.deleteContacto(key).subscribe(data => {
      if (data) {
        console.error(data)
      } else {
        delete this.contactos[key]
      }
    })
  }

  ngOnInit() {

  }

}
