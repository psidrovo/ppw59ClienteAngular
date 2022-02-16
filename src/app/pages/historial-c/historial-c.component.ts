import { Component, OnInit } from '@angular/core';
import { hstClinicaWs } from 'src/app/domain/HstClincia';
import { HstClinicawsService } from 'src/app/services/hst-clinicaws.service';

@Component({
  selector: 'app-historial-c',
  templateUrl: './historial-c.component.html',
  styleUrls: ['./historial-c.component.scss']
})
export class HistorialCComponent implements OnInit {

  hstHistorial: hstClinicaWs = new hstClinicaWs();

  ListHistoriales:any;

  id: any;

  constructor(private hstClinicasS:  HstClinicawsService) { }

  ngOnInit(): void {
  }

  guardar(){
    this.hstClinicasS.createCitas(this.hstHistorial);
  }

  finall(){
    this.ListHistoriales = this.hstClinicasS.findAllCitas();
  }

  modify(){
    this.hstClinicasS.updateCitas(this.hstHistorial);
  }

  read(){
    this.hstClinicasS.readCitas(this.id);
  }

  delete(){
    this.hstClinicasS.deleteCitas(this.hstHistorial);
  }

}
