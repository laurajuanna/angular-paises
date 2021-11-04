import { Component } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino; // IMPORTANTE asocio el termino de este archivo con el emitido por el input
    if (this.termino.trim().length === 0) {
      return
    }

    this.paisService.buscarPais(this.termino)
      .subscribe((resp) => {
        this.paises = resp;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

}
