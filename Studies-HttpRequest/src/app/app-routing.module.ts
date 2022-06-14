import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authentication/login/login.component';

const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'content',
    //     pathMatch: 'full'
    // },
    {
        path: 'login',
        loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'content',
        loadChildren: () => import('./modules/content/content.module').then(m => m.ContentModule)
    },
    {
        path: 'clientes',
        loadChildren: () => import('./modules/cadastros/cadastros.module').then(m => m.CadastrosModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
