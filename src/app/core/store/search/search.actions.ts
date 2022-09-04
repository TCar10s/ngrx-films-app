import { Film } from '@core/interfaces/film';
import { createAction, props } from '@ngrx/store';

export const searchFilms = createAction(
  '[Search] Search films',
  props<{ query: string }>()
);

export const loadedSearchFilms = createAction(
  '[Search] Loaded search films',
  props<{ films: Film[] }>()
);
