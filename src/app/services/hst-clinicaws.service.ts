import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { hstClinicaWs } from '../domain/HstClincia';

@Injectable({
  providedIn: 'root'
})
export class HstClinicawsService {

  constructor(private http:HttpClient) { }

  findAllCitas(){
    //const url = environment.WS_PATH + "pacientes"
    let url = "http://localhost:8080/ppw_final/ws/servicios/findAllHistorialClinico";
    return this.http.get<any> (url);
  }

  findAllCitasByCedula(cedula:any){
    //const url = environment.WS_PATH + "pacientes"
    let url = "http://localhost:8080/ppw_final/ws/servicios/HistorialCFindAllByCedula?cedula={String}";
    return this.http.get<any> (url,cedula);
  }
  createCitas(hstClinica:hstClinicaWs){
    let url = "http://localhost:8080/ppw_final/ws/servicios/guardarHistorialClinico";
    return this.http.post<any>(url,hstClinica);
  }

  readCitas(id:any){
    let url = "http://localhost:8080/ppw_final/ws/servicios/readHistorialClinico?id={int}";
    return this.http.post<any>(url,id);
  }
  updateCitas(hstClinica:hstClinicaWs){
    let url = "http://localhost:8080/ppw_final/ws/servicios/guardarHistorialClinico";
    return this.http.post<any>(url,hstClinica);
  }

  deleteCitas(id:any){
    let url = "http://localhost:8080/ppw_final/ws/servicios/deleteHistorialClinico?id={int}";
    return this.http.post<any>(url,id);
  }
}
