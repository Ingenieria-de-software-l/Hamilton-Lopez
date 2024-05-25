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

  login() {
    this.auth.validar(this.correo, this.password).subscribe(
      (user) => {
        if (user) {
          console.log('Usuario autenticado:', user);
          if(user.id){
          this.auth.setLogin(user.id);
          }
          this.router.navigate(['/notas']); // Redirige a una página después del login
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
