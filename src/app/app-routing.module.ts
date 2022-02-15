import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientesComponent } from './pages/pacientes/pacientes.component';

const routes: Routes = [
 {path:"pacientews", component:PacientesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
