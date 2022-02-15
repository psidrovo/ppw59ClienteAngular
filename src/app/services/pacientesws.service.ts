import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PacienteWs } from '../domain/pacientews';

@Injectable({
  providedIn: 'root'
})
export class PacienteswsService {

  constructor(private http:HttpClient) { }

  getPacientes(){
    //const url = environment.WS_PATH + "pacientes"
    let url = "http://localhost:8080/ppw_final/ws/servicios/findAllPersona";
    return this.http.get<any> (url);
  }
  save(paciente:PacienteWs){
    let url = "http://localhost:8080/ppw_final/ws/servicios/findAllPersona";
    return this.http.post<any>(url,paciente);
  }
}
