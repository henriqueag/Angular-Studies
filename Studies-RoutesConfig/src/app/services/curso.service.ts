import { Injectable } from "@angular/core";
import { Curso } from "../entities/curso";

@Injectable({
  providedIn: "root",
})
export class CursoService {
  JSON_CURSOS: string = `[
	{
		"id": 1,
		"nomeCurso": "Angular",
		"descricao": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam possimus ullam porro nulla, fuga rem nisi. Pariatur odio similique nostrum id ipsum cumque fugiat quod, quae consequatur ullam distinctio iure.",
		"cargaHoraria": 160,
		"valorCurso": 190.0
	},
	{
		"id": 2,
		"nomeCurso": "NET MVC",
		"descricao": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam possimus ullam porro nulla, fuga rem nisi. Pariatur odio similique nostrum id ipsum cumque fugiat quod, quae consequatur ullam distinctio iure.",
		"cargaHoraria": 200,
		"valorCurso": 250.0
	},
	{
		"id": 3,
		"nomeCurso": "NET WEB API",
		"descricao": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam possimus ullam porro nulla, fuga rem nisi. Pariatur odio similique nostrum id ipsum cumque fugiat quod, quae consequatur ullam distinctio iure.",
		"cargaHoraria": 230,
		"valorCurso": 250.0
	},
	{
		"id": 4,
		"nomeCurso": "Java",
		"descricao": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam possimus ullam porro nulla, fuga rem nisi. Pariatur odio similique nostrum id ipsum cumque fugiat quod, quae consequatur ullam distinctio iure.",
		"cargaHoraria": 450,
		"valorCurso": 380.0
	},
	{
		"id": 5,
		"nomeCurso": "Power BI",
		"descricao": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam possimus ullam porro nulla, fuga rem nisi. Pariatur odio similique nostrum id ipsum cumque fugiat quod, quae consequatur ullam distinctio iure.",
		"cargaHoraria": 100,
		"valorCurso": 150.0
	}
  ]`;
  constructor() {}

  getCursos() {
    let cursos: Array<Curso> = JSON.parse(this.JSON_CURSOS);
    return cursos;
  }
}