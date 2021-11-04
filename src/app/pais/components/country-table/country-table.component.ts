import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {

  // para recibir los países, agregamos al tag de la tabla
  // en el por-pais.component.html lo siguiente...
  // <app-country-table [paises]=paises></app-country-table>
  @Input() paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
