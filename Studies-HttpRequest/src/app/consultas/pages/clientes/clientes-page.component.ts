import { Router } from '@angular/router';
import { ClienteDeleteComponent } from './../../components/cliente-delete/cliente-delete.component';
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

    clientes$: Observable<Cliente[]>
    abriModalDelete: boolean = false

    constructor(private _serviceApi: ClientesSearchService,
        private _router: Router) { }

    ngOnInit(): void {
        this.clientes$ = this._serviceApi.getAll()
            .pipe(
                catchError(err => {
                    console.log(err)
                    return of(err)
                })
            )
    }

    abrirOpcaoDelete() {
        if (this.abriModalDelete)
            this.abriModalDelete = false
        else
            this.abriModalDelete = true
    }
}
