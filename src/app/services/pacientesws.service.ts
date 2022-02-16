import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CitaWs } from '../domain/citaws';
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

  saveCita(cita:CitaWs){
    let url = "http://localhost:8080/ppw_final/ws/servicios/guardarCita";
    return this.http.post<any>(url,cita);
  }

  findAllCitas(){
    let url = "http://localhost:8080/ppw_final/ws/servicios/findAllCita";
    return this.http.get<any> (url);
  }

  updateCita(cita:CitaWs){
    let url = "http://localhost:8080/ppw_final/ws/servicios/guardarCita";
    return this.http.post<any>(url,cita);
  }

  deleteCita(cita:CitaWs){
    let url = "http://localhost:8080/ppw_final/ws/servicios/deleteCita?id={int}";
    return this.http.post<any>(url,cita);
  }

  readCita(id :any){
    let url = "http://localhost:8080/ppw_final/ws/servicios/readCita?id={int}";
    return this.http.post<any>(url,id);
  }
}
