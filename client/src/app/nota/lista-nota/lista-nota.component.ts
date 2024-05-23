import { Component, OnInit } from '@angular/core';
import { Nota } from '../../models/nota';
import { NotaService } from '../../services/nota.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista-nota',
  templateUrl: './lista-nota.component.html',
  styleUrls: ['./lista-nota.component.css']

})
export class ListaNotaComponent{
  
  notas: Nota[] = [];
  listaVacia = undefined;

  constructor(
    private notaService: NotaService
  ) {}

  ngOnInit(): void {
    this.cargarNotas();
  }

  cargarNotas(): void {
    this.notaService.lista().subscribe(
      data => {
        this.notas = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );

  }

  borrar(id?: number) : undefined{
   
    if (id !== undefined) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'No hay vuelta atrás',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sip',
        cancelButtonText: 'Nops'
      }).then((result) => {
        if (result.value) {
          this.notaService.delete(id).subscribe(res => this.cargarNotas());
          Swal.fire(
            'OK',
            'Nota eliminado',
            'success'
          );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelado',
            'Nota a salvo',
            'error'
          );
        }
      });
    }
    
  }
  

}
