import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent {

  // Emite el termino. El <string> sería el string termino que sale del input
  @Output() onUserEnter: EventEmitter<string> = new EventEmitter();

  termino: string = '';

  buscar() {
    // emite el termino
    this.onUserEnter.emit(this.termino);
  }
}
