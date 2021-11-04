import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {

  // Emite el termino. El <string> sería el string termino que sale del input
  @Output() onUserEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  // FACT El subject es como un Observable
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  // FACT
  // el OnInit se dispara una única vez cuando el componente es creado
  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300)) // FACT para que se mande el valor sólo cuando dejamos de escribir
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      });
  }

  buscar() {
    // emite el termino
    this.onUserEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

}
