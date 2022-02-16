import { Component, OnInit } from '@angular/core';
import { CitaWs } from "src/app/domain/citaws";
import { PacienteswsService } from 'src/app/services/pacientesws.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {

  cita: CitaWs = new CitaWs();

  ListCitas:any;

  id: any;

  constructor(private pacienteservice : PacienteswsService) { }

  ngOnInit(): void {
  }

  guardar(){
    this.pacienteservice.saveCita(this.cita);
  }

  finall(){
    this.ListCitas = this.pacienteservice.findAllCitas();
  }

  modify(){
    this.pacienteservice.updateCita(this.cita);
  }

  read(){
    this.pacienteservice.readCita(this.id);
  }

  delete(){
    this.pacienteservice.deleteCita(this.cita);
  }

}
