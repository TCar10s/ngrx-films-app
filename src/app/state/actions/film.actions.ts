import { createAction, props } from '@ngrx/store';
import { FilmDetails } from '@core/interfaces/film-details';

export const loadFilmDetails = createAction(
  '[Film] Load film details',
  props<{ id: string }>()
);

export const loadFilmDetailsSuccess = createAction(
  '[Film] Load film details success',
  props<{ film: FilmDetails }>()
);
