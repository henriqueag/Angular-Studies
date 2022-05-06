import { Component, OnInit } from "@angular/core";
import { Curso } from "../entities/curso";
import { CursoService } from "../services/curso.service";

@Component({
  selector: "app-cursos",
  templateUrl: "./cursos.component.html",
  styleUrls: ["./cursos.component.css"],
})
export class CursosComponent implements OnInit {
  public cursos: Array<Curso> = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursos = this.cursoService.cursos;
  }
}
