import { Injectable } from "@angular/core";
import { Curso } from "../entities/curso";
import data from 'src/assets/cursos-data.json';

@Injectable({
	providedIn: "root",
})
export class CursoService {

	public cursos: Array<Curso> = [];

	constructor() {
		this.cursos = data as Array<Curso>;
	}

	public getCursoById(id: number) {
		let curso = this.cursos.find(curso => curso.id == id);
		if (curso === undefined)
			return null
		return curso;
	}
}
