import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FilmsService } from '@core/services/films.service';
import { loadedFilmDetails, loadFilmDetails } from '@store/film/film.actions';
import { EMPTY, switchMap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class FilmEffects {

  loadFilmDetails$ = createEffect(() => this.actions$.pipe(
    ofType(loadFilmDetails),
    switchMap(({ id }) => this.filmsService.getFilmDetails(id)
      .pipe(
        map(filmDetails => ({type: loadedFilmDetails.type, filmDetails})),
        catchError(() => EMPTY)
      )),
  ));

  constructor(
    private actions$: Actions,
    private filmsService: FilmsService,
  ) {}
}
