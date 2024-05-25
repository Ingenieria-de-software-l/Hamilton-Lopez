import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string ='';
  password: string = '';

  constructor(private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.auth.setLogin(null);
    console.log(this.auth.getUserId());
  }

  /*onLogin(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.auth.validar(this.correo, this.password).subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      err => {
        Swal.fire({
          title: "¡Error!",
          text: "Hubo un error al iniciar sesión. Inténtalo de nuevo.",
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        this.router.navigate(['/login']);
      }
      
    )


  }*/
  login() {
    this.auth.validar(this.correo, this.password).subscribe(
      (user) => {
        if (user) {
          console.log('Usuario autenticado:', user);
          if(user.id){
          this.auth.setLogin(user.id);
          }
          // Aquí puedes guardar el ID del usuario en un servicio compartido
          // o en el almacenamiento local del navegador
         // localStorage.setItem('userId', user.id); // Ejemplo de almacenamiento local
          this.router.navigate(['/dashboard']); // Redirige a una página después del login
        } else {
          Swal.fire({
            title: "¡Error!",
            text: "Credenciales incorrectas. Inténtalo de nuevo.",
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        Swal.fire({
          title: "¡Error!",
          text: "Credenciales incorrectas. Inténtalo de nuevo.",
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
        this.router.navigate(['/login']);
      }
    );
  }

}
