import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nombre: string = '';
  correo: string = '';
  password: string = '';
  tipo = 'user';

  constructor(private usuarioService: UsuarioService,
    private router: Router) { 

  }
  onCreate(): void {
    const usuario = new Usuario(this.nombre, this.correo, this.password, this.tipo);
  
    this.usuarioService.save(usuario).subscribe(
      data => {
        Swal.fire({
          title: "¡Usuario creado!",
          text: "El usuario se ha guardado correctamente.",
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          this.router.navigate(['/login']);
        });
      },
      err => {
        console.log(err);
        Swal.fire({
          title: "¡Error al guardar!",
          text: "Hubo un error al crear el usuario. Inténtalo de nuevo.",
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }
}
