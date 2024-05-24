import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from 'src/app/models/nota';
import { NotaService } from 'src/app/services/nota.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {
  nota: Nota | null = null; 
  constructor(
    private notaService: NotaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.notaService.detail(id).subscribe(
      data => {
        this.nota = data;
      },
      err => {
        Swal.fire({
          title: "¡Error!",
          text: "Hubo un error al cargar la nota. Inténtalo de nuevo.",
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        this.router.navigate(['/']);
       
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    if(this.nota == null) return;
    this.notaService.update(id, this.nota).subscribe(
      data => {
        Swal.fire({
          title: "¡Nota actualizada!",
          text: "La nota se ha actualizado correctamente.",
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.router.navigate(['/']);
        });
      },
      err => {

        Swal.fire({
          title: "¡Error al actualizar!",
          text: "Hubo un error al actualizar la nota. Inténtalo de nuevo.",
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
       
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
