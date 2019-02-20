import { RouterModule, Routes } from "@angular/router";
import { ContactosComponent } from "./components/contactos/contactos.component";
import { ContactoComponent } from "./components/contactos/contacto.component";
const app_routes : Routes = [
    { path: 'contactos', component: ContactosComponent },
    { path: 'contacto/:id', component: ContactoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'contactos' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);