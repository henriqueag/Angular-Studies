import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesPageComponent } from './pages/clientes/clientes-page.component';
import { ClienteDetailComponent } from './components/cliente-detail/cliente-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteUpdateComponent } from './components/cliente-update/cliente-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteDeleteComponent } from './components/cliente-delete/cliente-delete.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';


@NgModule({
    declarations: [
        ClientesPageComponent,
        ClienteDetailComponent,
        ClienteUpdateComponent,
        ClienteDeleteComponent,
        ClienteCreateComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ClientesRoutingModule,
        ReactiveFormsModule
    ]
})
export class ClientesModule { }
