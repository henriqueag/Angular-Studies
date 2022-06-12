import { ClientesSearchService } from '../../apis/clientes-search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, catchError, of, Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from '../../models/cliente.model';

@Component({
    selector: 'cliente-update',
    templateUrl: './cliente-update.component.html',
    styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit, OnDestroy {

    constructor(private _activatedRouter: ActivatedRoute,
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _serviceApi: ClientesSearchService) { }

    params$: Subscription
    cliente$: Observable<Cliente>
    clienteUpdate: Subscription
    form: FormGroup


    ngOnInit(): void {
        this.params$ = this._activatedRouter.params.subscribe(param => {
            this.cliente$ = this._serviceApi.getById(param['id'])
            this.clienteUpdate = this._serviceApi.getById(param['id'])
                .pipe(
                    catchError(err => {
                        console.log(err)
                        return of(err)
                    })
                ).subscribe(cliente => {
                    this.form = this._formBuilder.group({
                        nome: [cliente.nome],
                        cpf: [cliente.cpf],
                        rg: [cliente.rg],
                        data_nasc: [cliente.data_nasc],
                        email: [cliente.email],
                        endereco: [cliente.endereco],
                        celular: [cliente.celular]
                    })
                })
        })
    }

    onSubmit() {
        this.params$ = this._activatedRouter.params.subscribe(param => {
            const clienteId = param['id']
            this.clienteUpdate = this._serviceApi.updateCliente(clienteId, this.form.value)
                .pipe(
                    catchError(err => {
                        console.log(err)
                        return of(err)
                    })
                ).subscribe()
            this._router.navigate([`clientes/detalhes/${clienteId}`])
        })
    }

    voltarInicio() {
        this._router.navigate(['clientes'])
    }

    ngOnDestroy(): void {
        this.params$.unsubscribe()
        this.clienteUpdate.unsubscribe()
    }
}
