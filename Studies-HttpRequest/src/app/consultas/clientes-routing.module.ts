import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDeleteComponent } from './components/cliente-delete/cliente-delete.component';

import { ClienteDetailComponent } from './components/cliente-detail/cliente-detail.component';
import { ClienteUpdateComponent } from './components/cliente-update/cliente-update.component';
import { ClientesPageComponent } from './pages/clientes/clientes-page.component';

const routes: Routes = [
    {
        path: "",
        component: ClientesPageComponent,
    },
    {
        path: "editar/:id",
        component: ClienteUpdateComponent
    },
    {
        path: "detalhes/:id",
        component: ClienteDetailComponent
    },
    {
        path: "excluir/:id",
        component: ClienteDeleteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule { }
