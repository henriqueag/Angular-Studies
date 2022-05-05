import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CursosComponent } from "./cursos/cursos.component";
import { CursoDetalhesComponent } from "./curso-detalhes/curso-detalhes.component";

const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "cursos", component: CursosComponent },
  { path: "curso/:id", component: CursoDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
