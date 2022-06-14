import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    constructor(private _httpCliente: HttpClient) { }

    createToken(email: string, password: string) {
        const body = {
            email: email,
            password: password
        }
        const headers = {
            "Content-Type": "application/json"
        }
        return this._httpCliente.post<any>(environment.security.loginEndpoint, body, { headers: headers, observe: 'response' })
    }
}
