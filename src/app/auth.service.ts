import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router'; // Importa il servizio Router

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauthService: OAuthService, private router: Router) { // Inietta il servizio Router
    this.configureOAuth();
  }

  private configureOAuth() {
    const authConfig: AuthConfig = {
      issuer: 'URL_ISSUER',     //DA SOSTITUIRE!!!!!
      clientId: 'CLIENT_ID',    //DA SOSTITUIRE!!!!!
      redirectUri: window.location.origin,
      scope: 'openid profile email',
    };

    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    // Esegui il logout dell'utente
    this.oauthService.logOut();
    // Reindirizza l'utente alla pagina principale dopo il logout
    this.router.navigate(['/']);
  }

  get token() {
    return this.oauthService.getIdToken();
  }

  get isLoggedIn() {
    return this.oauthService.hasValidIdToken();
  }
}
