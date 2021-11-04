import { Component } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

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

    this.paisService.buscarCapital(this.termino)
      .subscribe((resp) => {
        this.paises = resp;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

}
