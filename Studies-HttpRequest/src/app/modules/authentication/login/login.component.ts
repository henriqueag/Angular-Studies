import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private _service: AuthenticationService,
        private _formBuilder: FormBuilder) { }

    formLogin: FormGroup

    ngOnInit(): void {
        this.formLogin = this._formBuilder.group({
            email: [''],
            password: ['']
        })
    }

    onSubmit() {
        const email = this.formLogin.value.email
        const password = this.formLogin.value.password
        this._service.createToken(email, password)
            .pipe(
                catchError(response => {
                    return of(`Erro na requisição: ${response.error}`)
                })
            )
            .subscribe(response => {
                const responseBody: any = response
                sessionStorage.setItem('access_token', responseBody.body.accessToken)
            })
    }

}
