import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  /*
  https://restcountries.com/v2/all

  pais por nombre
  https://restcountries.com/v2/name/argentina
  */
  private apiUrl: string = 'https://restcountries.com/v3';

  constructor(private http: HttpClient) { }

  // Para quitar el any de las llaves de abajo se usa quicktype.io
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url);
  }
}
