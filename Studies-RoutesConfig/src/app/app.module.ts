import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { CursosComponent } from "./cursos/cursos.component";
import { CursoDetalhesComponent } from "./curso-detalhes/curso-detalhes.component";
import { CursoService } from "./services/curso.service";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    CursoDetalhesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CursoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
