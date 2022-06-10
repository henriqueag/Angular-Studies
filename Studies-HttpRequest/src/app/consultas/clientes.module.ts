import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesPageComponent } from './pages/pacientes/clientes-page.component';
import { ClienteDetailComponent } from './components/pacientes-details/cliente-detail.component';


@NgModule({
  declarations: [
        ClientesPageComponent,
        ClienteDetailComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
