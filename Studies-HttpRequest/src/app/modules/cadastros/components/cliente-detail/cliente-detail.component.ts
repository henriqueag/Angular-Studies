import { ClientesSearchService } from '../../apis/clientes-search.service';
import { Cliente } from '../../models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, catchError, of } from 'rxjs';

@Component({
    selector: 'cliente-detail',
    templateUrl: './cliente-detail.component.html',
    styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit, OnDestroy {

    constructor(private _activatedRouter: ActivatedRoute,
        private _router: Router,
        private _serviceApi: ClientesSearchService) { }

    params$: Subscription
    cliente$: Observable<Cliente>

    ngOnInit(): void {
        this.params$ = this._activatedRouter.params.subscribe(param => {
            this.cliente$ = this._serviceApi.getById(param['id'])
                .pipe(
                    catchError(err => {
                        console.log(err)
                        return of(err)
                    })
                )
        })
    }

    updateCliente() {
        this.params$ = this._activatedRouter.params.subscribe(param => {
            this._router.navigate([`clientes/editar/${param['id']}`])
        })
    }

    voltarInicio() {
        this._router.navigate(['clientes'])
    }

    ngOnDestroy(): void {
        this.params$.unsubscribe()
    }
}
