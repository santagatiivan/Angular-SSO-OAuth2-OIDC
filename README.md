# Angular OIDC OAuth2 Login Project

## Overview
This Angular project provides a robust implementation of authentication using OpenID Connect (OIDC) and OAuth2 standards. It is designed to help developers quickly integrate secure authentication flows into their Angular applications.

## Features
- OIDC and OAuth2 integration using `angular-oauth2-oidc`.
- Protected routes with `AuthGuard`.
- Centralized authentication service (`AuthService`).
- Modular Angular architecture.

## Getting Started

### Prerequisites
- Node.js
- Angular CLI

### Installation
1. Clone the repository: git clone https://github.com/santagatiivan/Angular-SSO-OAuth2-OIDC.git
2. Install dependencies: cd <project-name>
                         npm install

## Detailed Code Functionality

### `app.module.ts`
This file is the root module of the Angular application. It imports essential Angular modules, including `BrowserModule` for running the app in a web browser and `AppRoutingModule` for routing. It declares `AppComponent` as the main component that will bootstrap when the app starts.

### `app-routing.module.ts`
Defines the routes of the application. It uses `AuthGuard` to protect the `/dashboard` route, ensuring that only authenticated users can access it. The `AuthGuard` service checks if the user is logged in before allowing access to the route.

### `auth.guard.ts`
Implements the `CanActivate` interface to guard routes. It uses `AuthService` to check if the user is logged in. If not, it redirects the user to the login page, ensuring secure access to protected routes.

### `auth.service.ts`
Provides authentication services using the `angular-oauth2-oidc` library. It configures the OAuth service with the application's specific settings (issuer, client ID, etc.) and includes methods for logging in and out. The service also exposes a method to check if the user is currently logged in.

### `app.component.ts` and `app.component.html`
`app.component.ts` serves as the root component of the application. It contains a method to initiate the login process. `app.component.html` provides the template, displaying a login button that triggers the authentication flow when clicked.

### `dashboard.component.ts` and `dashboard.component.html`
After successful authentication, the user is directed to the Dashboard, represented by `dashboard.component.ts` and its template `dashboard.component.html`. The dashboard simply displays a success message and includes a logout button, illustrating a basic post-login user interface.

### Configuration Files (`app.config.ts`, `app.config.server.ts`)
These files provide configuration settings for different aspects of the application, such as routing and server-side rendering optimizations. They are designed to be modified as per the deployment environment's requirements.


### Configuration
1. Update `auth.service.ts` with your OIDC/OAuth2 provider details:
- `issuer`
- `clientId`
- `redirectUri`
- `scope`
2. Configure route guards as needed in `app-routing.module.ts`.

### Running the Application
1. Start the Angular development server: ng serve
2. Open `http://localhost:4200/` in your browser.

## Contributing
Please refer to `CONTRIBUTING.md` for details on how to contribute to this project.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.



