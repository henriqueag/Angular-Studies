import { Observable, catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ClientesSearchService } from '../../apis/clientes-search.service';
import { Cliente } from '../../models/cliente.model';

@Component({
    selector: 'clientes-page',
    templateUrl: './clientes-page.component.html',
    styleUrls: ['./clientes-page.component.css']
})
export class ClientesPageComponent implements OnInit {

    private _clienteId: number

    constructor(private _serviceApi: ClientesSearchService) { }

    clientes$: Observable<Cliente[]>
    openModalDelete: string

    ngOnInit(): void {
        this.clientes$ = this._serviceApi.getAll()
            .pipe(
                catchError(err => {
                    console.log(err)
                    return of(err)
                })
            )
    }

    setClienteId(value: HTMLTableCellElement) {
        this._clienteId = parseInt(value.innerText)
    }

    getClienteId() {
        return this._clienteId
    }

    openModal() {
        this.openModalDelete = `<cliente-delete
                            data_bs_target="deleteOptionModal"
                            [clienteId] = "getClienteId()"
                        >
                        </cliente-delete>`

    }
}
