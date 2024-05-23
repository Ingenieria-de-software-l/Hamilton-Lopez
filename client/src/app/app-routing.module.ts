import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaNotaComponent } from './nota/lista-nota/lista-nota.component';
import { DetalleNotaComponent } from './nota/detalle-nota/detalle-nota.component';
import { NuevoNotaComponent } from './nota/nuevo-nota/nuevo-nota.component';
import { EditarNotaComponent } from './nota/editar-nota/editar-nota.component';

const routes: Routes = [
  {path: '', component: ListaNotaComponent},
  {path: 'detalle/:id', component: DetalleNotaComponent},
  {path: 'nuevo', component: NuevoNotaComponent},
  {path: 'editar/:id', component: EditarNotaComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
