import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';

  constructor() { }

  buscar() {
    if (this.termino.trim().length === 0) {
      return
    }
    console.log(this.termino);
    this.termino = '';
  }

}
