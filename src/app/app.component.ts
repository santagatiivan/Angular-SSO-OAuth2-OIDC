import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Importa il servizio di autenticazione

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-OIDC';

  constructor(private authService: AuthService) {}

  login() {
    // Avvia il processo di login con Microsoft
    this.authService.login();
  }
}
