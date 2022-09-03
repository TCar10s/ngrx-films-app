import { addTopRatedFilms, loadInitialTopRatedFilms, loadMoreTopRatedFilms } from '@state/actions/top-rated.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, switchMap, take, tap } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { FilmsService } from '@core/services/films.service';

@Injectable()
export class TopRatedEffects {

  laodTopRatedFilms$ = createEffect(() => this.actions$.pipe(
    ofType(loadInitialTopRatedFilms),
    tap(() => console.log('Initial top rated films')),
    switchMap(({category}) => this.filmsService.getByCategory(category)
      .pipe(
        map(films => ({type: addTopRatedFilms.type, films})),
        catchError(() => EMPTY)
      )),
    take(1)
  ));

  laodMoreTopRatedFilms$ = createEffect(() => this.actions$.pipe(
    ofType(loadMoreTopRatedFilms),
    tap(() => console.log('Initial load more top rated')),
    switchMap(({category}) => this.filmsService.getByCategory(category)
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
