import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  // El signo ! es para que TS confíe
  // en que país puede ser nulo PERO va a traer data.
  pais!: Country[];

  // FACT observable para obtener el parámetro de la ruta..
  // por ejemplo, de pais/arg nos devuelve el arg
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    /* 1. sin desestructuración
    this.activatedRoute.params
      .subscribe(params => {
        console.log(params);
      })*/

    /* 2. Con desestructuración y respuesta
    this.activatedRoute.params
      .subscribe(({ id }) => {
        console.log(id);
        this.paisService.buscarPaisPorCodigo(id)
          .subscribe(pais => {
            console.log(pais);
          })
      })*/

    // En este caso, recibe un observable y devuelve otro
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.buscarPaisPorCodigo(id))
      ).subscribe((paisObtenido) => this.pais = paisObtenido);

  }



}
