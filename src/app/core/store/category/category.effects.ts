import { CategoryActions } from '@core/store/category';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, switchMap, take } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FilmsService } from '@core/services/films.service';

import { CATEGORIES } from '@core/utils/stote.enums';

@Injectable()
export class CategoryEffects {
  loadTopRatedFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CategoryActions.loadInitialTopRatedFilms,
        CategoryActions.loadInitialUpcomingFilms
      ),
      switchMap(({ category }) =>
        this.filmsService.getByCategory(category).pipe(
          map((films) => {
            if (category === CATEGORIES.TopRated)
              return { type: CategoryActions.addTopRatedFilms.type, films };
            if (category === CATEGORIES.Upcoming)
              return { type: CategoryActions.addUpcomingFilms.type, films };

            return { type: CategoryActions.addTopRatedFilms.type, films: [] };
          }),
          catchError(() => EMPTY)
        )
      ),
      take(2)
    )
  );

  loadMoreTopRatedFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        CategoryActions.loadMoreTopRatedFilms,
        CategoryActions.loadMoreUpcomingFilms
      ),
      switchMap(({ category }) =>
        this.filmsService.getByCategory(category).pipe(
          map((films) => {
            if (category === CATEGORIES.TopRated)
              return { type: CategoryActions.addTopRatedFilms.type, films };
            if (category === CATEGORIES.Upcoming)
              return { type: CategoryActions.addUpcomingFilms.type, films };

            return { type: CategoryActions.addTopRatedFilms.type, films: [] };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private filmsService: FilmsService) {
  }
}
