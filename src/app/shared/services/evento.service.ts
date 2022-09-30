import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';
import { take, map } from 'rxjs/operators';


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

}
