import { createAction, props } from '@ngrx/store';
import { FilmDetails } from '@core/interfaces/film';

export const loadFilmDetails = createAction(
  '[Film] Load film details',
  props<{ id: string }>()
);

export const loadedFilmDetails = createAction(
  '[Film] Load film details success',
  props<{ filmDetails: FilmDetails }>()
);
