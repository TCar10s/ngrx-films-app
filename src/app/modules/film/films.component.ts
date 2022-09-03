import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmDetails } from 'src/app/core/interfaces/film-details';
import { FilmsService } from 'src/app/core/services/films.service';
import { Location } from '@angular/common';
import { Cast } from '@core/interfaces/credits-response';
import { combineLatest, Observable } from 'rxjs';
import { Trailer } from '@core/interfaces/trailer-response';
import { AppState } from '@state/app.state';
import { Store } from '@ngrx/store';
import { selectFilmDetails } from '@state/selectors/film.selectors';
import { loadFilmDetails } from '@state/actions/film.actions';

/*
  El combineLatest recibe una cantidad x de observables y regresa
  un array con todas las respuestas de los observables cuando ya
  han emitido por lo menos 1 valor todos.
*/

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: [ './films.component.css' ],
})
export class FilmsComponent implements OnInit {
  public film$: Observable<FilmDetails> = this.store.select(selectFilmDetails);
  public cast: Cast[] = [ {} as Cast ];
  public trailer: Trailer = {} as Trailer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmService: FilmsService,
    private location: Location,
    private router: Router,
    private store: Store<AppState>,
  ) {
    this.cast = [];
  }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;
    this.store.dispatch(loadFilmDetails({id})); // Para cuando se permanece en la misma ruta
    combineLatest([
      this.filmService.getCast(id),
      this.filmService.getTrailer(id)
    ]).subscribe(([ cast, trailer ]) => {
      console.log(trailer)
      this.cast = cast;
      console.log(this.cast)
      this.trailer = trailer[0];
    });
  }

  backPage = (): void => {
    this.location.back();
  }
}
