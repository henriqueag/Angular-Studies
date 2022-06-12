import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ApiRestService } from './api-rest.service';
import { Paciente } from './paciente.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    menuItems: MenuItems[] = [
        {
            label: 'Home',
            link: '/content'
        },
        {
            label: 'Clientes',
            link: '/clientes'
        }
    ]

    pacientes$: Observable<Paciente[]>
    paciente$: Observable<Paciente | undefined>
    executouListar: boolean = false

    constructor(private _apiRest: ApiRestService) { }


    ngOnInit() {
        this.pacientes$ = this._apiRest.getAllPacientes()
        this.executouListar = true
    }

    listPatients() {
        this.pacientes$ = this._apiRest.getAllPacientes()
        this.executouListar = true
    }

    searchPatientById(value: any) {
        this.paciente$ = this._apiRest.getPacienteById(value)
            .pipe(catchError(error => { return of(error.message) }))
        this.executouListar = false
    }

    searchPatientByCpf(value: any) {
        this.paciente$ = this._apiRest.getPacienteByCpf(value)
            .pipe(catchError(error => { return of(error.message) }))
        this.executouListar = false
    }
}

export interface MenuItems {
    label: string,
    link: string
}
