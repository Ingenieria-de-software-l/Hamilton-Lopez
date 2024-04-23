import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nota } from '../models/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  notaURL = 'http://localhost:8080/nota/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Nota[]> {
    return this.httpClient.get<Nota[]>(`${this.notaURL}`);
  }

  public detail(id: number): Observable<Nota> {
    return this.httpClient.get<Nota>(`${this.notaURL}${id}`);
  }


  public save(nota: Nota): Observable<any> {
    return this.httpClient.post<any>(`${this.notaURL}`, nota);
  }

  public update(id: number, nota: Nota): Observable<any> {
    return this.httpClient.put<any>(`${this.notaURL}${id}`, nota);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.notaURL}${id}`);
  }

}
