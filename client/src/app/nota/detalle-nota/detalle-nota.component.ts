import { Component, OnInit } from '@angular/core';import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from 'src/app/models/nota';
import { NotaService } from 'src/app/services/nota.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-nota',
  templateUrl: './detalle-nota.component.html',
  styleUrls: ['./detalle-nota.component.css']
})
export class DetalleNotaComponent implements OnInit  {
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
        this.router.navigate(['/notas']);
      }
    );
  }

  volver(): void {
    this.router.navigate(['/notas']);
  }
}
