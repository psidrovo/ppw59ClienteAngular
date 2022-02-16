import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";

import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { HistorialCComponent } from './pages/historial-c/historial-c.component'; 

@NgModule({
  declarations: [
    AppComponent, 
    PacientesComponent, HistorialCComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
