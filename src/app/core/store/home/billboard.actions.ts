import { createAction, props } from '@ngrx/store';
import { Film } from '@core/interfaces/film';

export const loadInitialBillboard = createAction('[Billboard] Load initial billboard');
export const loadMoreBillboard = createAction('[Billboard] Load more billboard');

export const addFilmsToBillboard = createAction(
  '[Billboard] Add films to billboard',
  props<{ films: Film[] }>()
);
