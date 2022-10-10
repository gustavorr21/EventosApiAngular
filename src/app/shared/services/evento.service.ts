import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';
import { catchError, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  baseURL = environment.apiURL + 'api/evento';

  constructor(private http: HttpClient) { }

  public getEventos(): Observable<any> {
    return this.http
      .get<Evento[]>(this.baseURL)
      .pipe(take(1));
  }

  obterEvento(id: number): Observable<Evento> {
    const url = `${this.baseURL}/${id}`;

    return this.http.get<Evento>(url)
      .pipe(
        take(1),
      );
  }

  incluirEvento(evento: any): Observable<any> {
    return this.http.post(`${this.baseURL}/incluir-evento`, { evento })
      .pipe(
        take(1),
      );
  }

  atualizarEvento(evento: any): Observable<any> {
    const url = `${this.baseURL}/${evento.id}`;
    return this.http.patch(url, { evento })
      .pipe(
        take(1),
      );
  }

  excluirEventoPorId(id: number): Observable<Evento> {
    const url = `${this.baseURL}/${id}`;

    return this.http.delete<Evento>(url)
      .pipe(
        take(1),
      );
  }


}
