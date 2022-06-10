import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteDetailComponent } from './components/pacientes-details/cliente-detail.component';
import { ClientesPageComponent } from './pages/pacientes/clientes-page.component';

const routes: Routes = [
    {
        path: "",
        component: ClientesPageComponent,
        children: [
            {
                path: "paciente-detail",
                component: ClienteDetailComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientesRoutingModule { }
