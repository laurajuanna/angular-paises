import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  // FACT lo siguiente es una forma de pasar los campos específicos que queremos traer de un objeto
  // más abajo en el método de región hay otra forma de hacerlo, y en el de ver país por código trae TODO
  get httpParams() {
    return new HttpParams().set('fields', 'name,flags,cca2,capital,population');
  }

  constructor(private http: HttpClient) { }

  // FACT Para quitar el any de las llaves de abajo se usa quicktype.io
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;

    // los params son los campos específicos que quiero traer de un objeto para no traer tooodo
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }


  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;

    // los params son los campos específicos que quiero traer de un objeto para no traer tooodo
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }


  buscarPaisPorCodigo(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;

    // así queda sin params, si quiero traer TODO lo que contiene el objeto
    return this.http.get<Country[]>(url);
  }


  buscarRegion(region: string): Observable<Country[]> {
    // FACT lo de abajo es otra forma de hacer lo de los params (Campos específicos a traer en vez de toodo el objeto)
    const url = `${this.apiUrl}/region/${region}?fields=name,flags,cca2,capital,population`;

    return this.http.get<Country[]>(url);
  }
}
