import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente.model';

const ROUTE = `${environment.apiHost}/clientes`

@Injectable({
    providedIn: 'root'
})
export class ClientesSearchService {

    constructor(private _httpCliente: HttpClient) { }

    getAll() {
        return this._httpCliente.get<Cliente[]>(ROUTE)
    }

    getById(clienteId: number) {
        return this._httpCliente.get<Cliente>(`${ROUTE}/${clienteId}`)
    }

    updateCliente(clienteId: number, body: Cliente) {
        const headers: any = {
            "Content-Type": "application/json"
        }
        return this._httpCliente.put<Cliente>(`${ROUTE}/${clienteId}`, body, { headers: headers})
    }
}
