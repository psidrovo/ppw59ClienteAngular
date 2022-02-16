import { Component, OnInit } from '@angular/core';
import { CitaWs } from "src/app/domain/citaws";
import { CitaswsService } from 'src/app/services/citasws.service';
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

  constructor(private citaService : CitaswsService) { }

  ngOnInit(): void {
  }

  guardar(){
    this.citaService.createCitas(this.cita);
  }

  finall(){
    this.ListCitas = this.citaService.findAllCitas();
  }

  modify(){
    this.citaService.updateCitas(this.cita);
  }

  read(){
    this.citaService.readCitas(this.id);
  }

  delete(){
    this.citaService.deleteCitas(this.cita);
  }

}
