import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesSearchService } from '../../apis/clientes-search.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

    constructor(private _router: Router,
        private _formBuilder: FormBuilder,
        private _serviceApi: ClientesSearchService) { }

    cliente: Cliente = new Cliente()
    form: FormGroup


    ngOnInit(): void {
        this.form = this._formBuilder.group({
            nome: [this.cliente.nome],
            cpf: [this.cliente.cpf],
            rg: [this.cliente.rg],
            data_nasc: [this.cliente.data_nasc],
            email: [this.cliente.email],
            endereco: [this.cliente.endereco],
            celular: [this.cliente.celular]
        })
    }

    onSubmit() {
        const body: Cliente = this.form.value
        this._serviceApi.createCliente(body).subscribe()
    }

    voltarInicio() {
        this._router.navigate(['clientes'])
    }
}
