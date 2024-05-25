import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService
      ) {}
      async validateUser(correo: string, pass: string): Promise<any> {
        const user = await this.usuarioService.findByEmail(correo);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }
    
}
