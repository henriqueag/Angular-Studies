import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ApiRestService } from './api-rest.service';
import { Paciente } from './paciente.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    menuItems: any[] = [
        {
            label: 'Home',
            link: '/content'
        },
        {
            label: 'Clientes',
            link: '/clientes'
        }
    ]
}
