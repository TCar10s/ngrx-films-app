import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { EMPTY, switchMap, take } from 'rxjs';
import { FilmsService } from '@core/services/films.service';
import { catchError, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { addFilmsToBillboard, loadInitialBillboard, loadMoreBillboard } from '@state/actions/billboard.actions';

@Injectable()
export class BillboardEffects {
  loadBillboard$ = createEffect(() => this.actions$.pipe(
      ofType(loadInitialBillboard), // Permite que se realice la petición solo cuando se dispare la acción loadInitialBillboard
      switchMap(() => this.filmsService.getBillboard()
        .pipe(
          map((films) => ({type: addFilmsToBillboard.type, films})),
          catchError(() => EMPTY)
        )),
      take(1)
    )
  );

  loadMoreBillboard$ = createEffect(() => this.actions$.pipe(
      ofType(loadMoreBillboard), // Permite que se realice la petición solo cuando se dispare la acción loadMoreBillboard
      switchMap(() => this.filmsService.getBillboard()
        .pipe(
          map((films) => ({type: addFilmsToBillboard.type, films})),
          catchError(() => EMPTY)
        )),
    )
  );

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private filmsService: FilmsService,
  ) {
  }
}
