import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Curso } from '../entities/curso';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-curso-detalhes',
  templateUrl: './curso-detalhes.component.html',
  styleUrls: ['./curso-detalhes.component.css']
})
export class CursoDetalhesComponent implements OnInit {

  public id: any;
  public curso: any;
  private inscricao: Subscription;

  constructor(private cursoService: CursoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.inscricao = this.activatedRoute.params.subscribe((params: any) => {
      this.id = <number>params['id'];
      this.curso = this.cursoService.getCursoById(this.id);
    });

    console.log(this.curso);
  }

}
