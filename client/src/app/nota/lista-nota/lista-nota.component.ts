import { Component} from '@angular/core';
import { Nota } from '../../models/nota';
import { NotaService } from '../../services/nota.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-lista-nota',
  standalone: true,
  imports: [RouterModule,HttpClientModule],
  templateUrl: 'lista-nota.component.html',
  styleUrl: 'lista-nota.component.css'

})

export class ListaNotaComponent {
  notas: Nota[] = [];
  listaVacia = undefined;

  constructor(
    private notaService: NotaService
    ) { }

  ngOnInit() {
    this.cargarNotas();
  }

  cargarNotas(): void {
    this.notaService.lista().subscribe(
      data => {
        this.notas = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    console.log(id);
  }

}
