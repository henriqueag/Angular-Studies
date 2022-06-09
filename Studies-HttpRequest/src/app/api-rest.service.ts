import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Paciente } from './paciente.model';

@Injectable({
    providedIn: 'root'
})
export class ApiRestService {

    constructor(private _httpclient: HttpClient) { }

    getAllPacientes() {
        return this._httpclient.get<Paciente[]>(ROUTE)
    }

    getPacienteById(value: number) {
        return this.getAllPacientes()
            .pipe(
                map(pacientes => {
                    const paciente = pacientes.find(paciente => paciente.id == value)
                    if (typeof paciente === 'undefined') {
                        throw new Error('Não há nenhum registro com o id informado.')
                    }
                    return paciente
                })
            )
    }

    getPacienteByCpf(value: string) {
        return this.getAllPacientes()
            .pipe(
                map(pacientes => {
                    const paciente = pacientes.find(paciente => paciente.cpf == value)
                    if (typeof paciente === 'undefined') {
                        throw new Error('Não há nenhum registro com o cpf informado.')
                    }
                    return paciente
                })
            )
    }
}

const ROUTE = 'http://localhost:3000/pacientes';
