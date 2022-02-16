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
    let url = "";
    return this.http.get<any> (url);
  }
  createCitas(hstClinica:hstClinicaWs){
    let url = "";
    return this.http.post<any>(url,hstClinica);
  }

  readCitas(id:any){
    let url = "";
    return this.http.post<any>(url,id);
  }
  updateCitas(hstClinica:hstClinicaWs){
    let url = "";
    return this.http.post<any>(url,hstClinica);
  }

  deleteCitas(hstClinica:hstClinicaWs){
    let url = "";
    return this.http.post<any>(url,hstClinica);
  }
}
