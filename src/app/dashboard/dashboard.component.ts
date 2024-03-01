import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Importa il servizio di autenticazione

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private authService: AuthService) {}

  logout() {
    // Esegui il logout dell'utente
    this.authService.logout();
  }
}
