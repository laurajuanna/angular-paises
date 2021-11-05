import { Component } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  paises: Country[] = [];
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  //regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC']
  regionActiva: string = '';

  constructor(private paisService: PaisService) { }

  activarRegion(region: string) {

    if (region === this.regionActiva) {
      return // si toco dos veces en la misma región no hace nada, directamente sale del método.
    }
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
      .subscribe(paisesArray => this.paises = paisesArray);
  }

  /*
  FACT En caso de querer enviar la clase desde el TS
  getClaseCSS(region: string) {
    return region === this.regionActiva ?
      'btn btn-sm btn-primary' : 'btn btn-sm btn-outline-primary'
  }
  */


}
