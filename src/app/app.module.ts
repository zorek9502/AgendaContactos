import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ContactoComponent } from "./components/contactos/contacto.component";

import { APP_ROUTING } from "./app.routes";
import { ContactosService } from "./services/contactos.service";
import { KeysPipe } from './pipes/keys.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ContactoComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING 
  ],
  providers: [
    ContactosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
