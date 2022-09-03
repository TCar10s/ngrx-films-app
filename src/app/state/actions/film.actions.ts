import { createAction, props } from '@ngrx/store';
import { Film } from '@core/interfaces/film';
import { Cast } from '@core/interfaces/cast-response';

export const loadFilmDetails = createAction(
  '[Film] Load film details',
  props<{ id: string }>()
);

export const loadedFilmDetails = createAction(
  '[Film] Load film details success',
  props<{ film: Film }>()
);

export const loadFilmCast = createAction(
  '[Film] Load film cast',
  props<{ id: string }>()
);

export const loadedFilmCast = createAction(
  '[Film] Loaded film cast',
  props<{ cast: Cast[] }>()
);
