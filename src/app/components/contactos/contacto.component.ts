import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Contacto } from "../../interfaces/contacto.interface";
import { ContactosService } from "../../services/contactos.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {

  contacto: Contacto = {
    nombre: "",
    telefono:"",
    key: ""
  }

  id_contacto: any;
  parametro: string;
  nuevo: boolean = false;

  constructor(private _contactosService: ContactosService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.parametro = params['id'];
      if (this.parametro != 'nuevo') {
        _contactosService.readContacto(this.parametro).subscribe((data: any) => {
          this.contacto = data;
        })
      }
    })
  }

  ngOnInit() {
  }

  guardar() {
    if (this.parametro == "nuevo") {
      this._contactosService.createContacto(this.contacto)
        .subscribe(data => {
          this.id_contacto = data;
          this.id_contacto = this.id_contacto.name;
          this.router.navigate(['/contacto', this.id_contacto])
          alert("Guardado con Exito")
        },
          error => console.log(error)
        )
      this.nuevo = true;
    } else {
      this._contactosService.updateContacto(this.contacto, this.parametro)
        .subscribe(data => {
          alert("Guardado con Exito")
        },
          error => console.log(error))
      this.nuevo = false;
    }
    
  }

  agregarNuevo(forma: NgForm) {
    this.router.navigate(['/contacto', 'nuevo']);
    forma.reset()
  }

}
