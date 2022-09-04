import { Injectable } from '@angular/core';
import { FilmsService } from '@core/services/films.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadedSearchFilms, searchFilms } from './search.actions';
import { EMPTY, switchMap, take } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class SearchEffects {
  $searchFilms = createEffect(() =>
    this.actions$.pipe(
      ofType(searchFilms),
      switchMap(({ query }) =>
        this.filmsService.searchFilms(query).pipe(
          map((films) => ({ type: loadedSearchFilms.type, films })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private filmsService: FilmsService) {}
}
