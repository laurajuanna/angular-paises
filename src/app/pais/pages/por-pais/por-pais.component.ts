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
  paisesSugeridos: Country[] = [];

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
        console.log(resp);
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0, 5),
        (err) => this.paisesSugeridos = []);
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
    this.termino = '';
  }

}
