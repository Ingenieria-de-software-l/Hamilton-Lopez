import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  usuarioURL = 'http://localhost:8080/usuario/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.usuarioURL}`);
  }

  public getById(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.usuarioURL}${id}`);
  }
  public getByCorreo(correo: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.usuarioURL}${correo}`);
  }

  public save(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(`${this.usuarioURL}`, usuario);
  }

  public update(id: number, usuario: Usuario): Observable<any> {
    return this.httpClient.put<any>(`${this.usuarioURL}${id}`, usuario);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.usuarioURL}${id}`);
    }
  
  public login(usuario: Usuario): Observable<any> {
    return this.httpClient.post<any>(`${this.usuarioURL}login`, usuario);
  }
  
}
