import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FilmsService } from '@core/services/films.service';
import { loadFilmDetails, loadFilmDetailsSuccess } from '@state/actions/film.actions';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FilmEffects {

  loadFilmDetails$ = createEffect(() => this.actions$.pipe(
    ofType(loadFilmDetails),
    switchMap(({id}) => this.filmsService.getFilmDetails(id)
      .pipe(
        map((film) => ({type: loadFilmDetailsSuccess.type, film}))
      )),
  ));

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private filmsService: FilmsService,
  ) {
  }
}
