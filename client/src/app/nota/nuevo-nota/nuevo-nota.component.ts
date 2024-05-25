import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Nota } from 'src/app/models/nota';
import { AuthService } from 'src/app/services/auth.service';
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
  
  estado = false;
  categoria = '';

  constructor(
    private notaService: NotaService,
    private authService: AuthService,
    private router: Router) { } 
  ngOnInit(): void {
    this.authService.setLogin(this.authService.getUserId());
  }
  onCreate(): void {
    const usuario = this.authService.getUserId();
    const nota = new Nota(this.titulo, this.contenido, this.fecha, this.estado, usuario, this.categoria);
  
    this.notaService.save(nota).subscribe(
      data => {
        Swal.fire({
          title: "¡Nota guardada!",
          text: "La nota se ha guardado correctamente.",
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.router.navigate(['/notas']);
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

  volver(): void {
    this.router.navigate(['/notas']);
  }

}
