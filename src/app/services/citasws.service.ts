import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitaWs } from '../domain/citaws';

@Injectable({
  providedIn: 'root'
})
export class CitaswsService {

  constructor(private http:HttpClient) { }

  findAllCitas(){
    //const url = environment.WS_PATH + "pacientes"
    let url = "http://localhost:8080/ppw_final/ws/servicios/findAllCita";
    return this.http.get<any> (url);
  }
  createCitas(cita:CitaWs){
    let url = "http://localhost:8080/ppw_final/ws/servicios/guardarCita";
    return this.http.post<any>(url,cita);
  }

  readCitas(cita:CitaWs){
    let url = "http://localhost:8080/ppw_final/ws/servicios/readCita?id={int}";
    return this.http.post<any>(url,cita);
  }
  updateCitas(cita:CitaWs){
    let url = "http://localhost:8080/ppw_final/ws/servicios/guardarCita";
    return this.http.post<any>(url,cita);
  }

  deleteCitas(cita:CitaWs){
    let url = "http://localhost:8080/ppw_final/ws/servicios/deleteCita?id={int}";
    return this.http.post<any>(url,cita);
  }
}
