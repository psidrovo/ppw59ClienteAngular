import { Component, OnInit } from '@angular/core';
import { PacienteWs } from 'src/app/domain/pacientews';
import { PacienteswsService } from 'src/app/services/pacientesws.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  paciente: PacienteWs = new PacienteWs();
  pacientes: any;

  constructor(private pacienteService: PacienteswsService) { }

  ngOnInit(): void {
    this.guardar();
  }

  guardar(){
    this.pacientes = this.pacienteService.getPacientes();
  }
}
