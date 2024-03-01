import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Importa il modulo di routing
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // Altri componenti, se presenti
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Includi il modulo di routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
