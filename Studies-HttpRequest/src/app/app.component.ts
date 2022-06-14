import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    menuItems: any[] = [
        {
            label: 'Home',
            link: '/content'
        },
        {
            label: 'Clientes',
            link: '/clientes'
        }
    ]
}
