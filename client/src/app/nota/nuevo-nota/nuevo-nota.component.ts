import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Nota } from 'src/app/models/nota';
import { NotaService } from 'src/app/services/nota.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nuevo-nota',
  templateUrl: './nuevo-nota.component.html',
  styleUrls: ['./nuevo-nota.component.css']
})
export class NuevoNotaComponent {
  titulo = '';
  contenido = '';
  fecha = new Date();
  usuario = 1;
  estado = false;
  categoria = '';

  constructor(
    private notaService: NotaService,
    private router: Router) { } 
  ngOnInit(): void {
  
  }
  onCreate(): void {
    const nota = new Nota(this.titulo, this.contenido, this.fecha, this.estado, this.usuario, this.categoria);
  
    this.notaService.save(nota).subscribe(
      data => {
        Swal.fire({
          title: "¡Nota guardada!",
          text: "La nota se ha guardado correctamente.",
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.router.navigate(['/']);
        });
      },
      err => {
        console.log(err);
        Swal.fire({
          title: "¡Error al guardar!",
          text: "Hubo un error al guardar la nota. Inténtalo de nuevo.",
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }
/*
  onCreate(): void {
    const nota = new Nota(this.titulo, this.contenido, this.fecha, this.estado, this.usuarioId);

    this.notaService.save(nota).subscribe(
      data => {
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      }
    )

   /* const nota = new Nota(this.titulo, this.contenido, this.fecha, this.estado, this.usuarioId);
    this.notaService.save(producto).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }*/

  volver(): void {
    this.router.navigate(['/']);
  }

}
