import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; // Importa la tua componente della dashboard, se esiste
import { AuthGuard } from './auth.guard'; // Importa la guardia di autenticazione, se necessario

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Reindirizza alla home se l'URL è vuoto
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Mostra la dashboard sulla route '/dashboard', se l'utente è autenticato
  // Altre rotte, se necessario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
