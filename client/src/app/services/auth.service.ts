import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuarioURL = 'http://localhost:8080/auth/'
  private userId: number | null = null;

  constructor(private usuarioService: UsuarioService, private httpClient: HttpClient) {}

  /*login(userId: number) {
    this.userId = userId;
  }*/
  setLogin(id : number | null) {
    this.userId = id;
  
  }

  

  getUserId(): number {
    if (!this.userId) {
      return this.userId!;
    }
    return this.userId!;
    
  }

  logout() {
    this.userId = null;
  }
  /*validar(correo: string, password: string): Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${this.usuarioURL}`, { correo, password });
  }*/
  validar(correo: string, password: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.usuarioURL}validate/${correo}/${password}`);
  }
  
}