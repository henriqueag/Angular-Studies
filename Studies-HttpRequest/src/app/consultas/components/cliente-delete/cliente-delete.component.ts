import { Component, Input, OnChanges } from '@angular/core';
import { ClientesSearchService } from '../../apis/clientes-search.service';
import { Cliente } from '../../models/cliente.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnChanges {

    constructor(private apiService: ClientesSearchService) { }

    @Input() clienteId: any
    @Input() data_bs_target: string
    cliente$: Observable<Cliente>

    ngOnChanges() {
        if(this.clienteId > 0)
            this.cliente$ = this.apiService.getById(this.clienteId)
    }

    deleteCliente() {
        const deleteCliente = this.apiService.deleteCliente(this.clienteId).subscribe()
        setTimeout(() => deleteCliente.unsubscribe, 2000)
    }
}
