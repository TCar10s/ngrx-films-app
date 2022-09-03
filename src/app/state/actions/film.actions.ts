import { createAction, props } from '@ngrx/store';
import { Film, FilmDetails } from '@core/interfaces/film';

export const loadFilmDetails = createAction(
  '[Film] Load film details',
  props<{ id: string }>()
);

export const loadedFilmDetails = createAction(
  '[Film] Load film details success',
  props<{ filmDetails: FilmDetails }>()
);

export const loadInitialTopRatedFilms = createAction(
  '[Film] Load initial top rated films',
  props<{ category: string }>()
);

export const loadMoreTopRatedFilms = createAction(
  '[Film] Load more top rated films',
  props<{ category: string }>()
);

export const addTopRatedFilms = createAction(
  '[Film] Add top rated films',
  props<{ films: Film[] }>()
);
