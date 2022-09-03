import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FilmsService } from '@core/services/films.service';
import {
  addTopRatedFilms,
  loadedFilmDetails,
  loadFilmDetails,
  loadInitialTopRatedFilms,
  loadMoreTopRatedFilms
} from '@state/actions/film.actions';
import { EMPTY, switchMap, take, tap } from 'rxjs';
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

  laodTopRatedFilms$ = createEffect(() => this.actions$.pipe(
    ofType(loadInitialTopRatedFilms),
    tap(() => console.log('Initial top rated films')),
    switchMap(({ category }) => this.filmsService.getByCategory(category)
      .pipe(
        map(films => ({type: addTopRatedFilms.type, films})),
        catchError(() => EMPTY)
      )),
      take(1)
  ));

  laodMoreTopRatedFilms$ = createEffect(() => this.actions$.pipe(
    ofType(loadMoreTopRatedFilms),
    tap(() => console.log('Initial load more top rated')),
    switchMap(({ category }) => this.filmsService.getByCategory(category)
      .pipe(
        map(films => ({type: addTopRatedFilms.type, films})),
        catchError(() => EMPTY)
      )),
  ));

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private filmsService: FilmsService,
  ) {
  }
}
