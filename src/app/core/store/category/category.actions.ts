import { createAction, props } from '@ngrx/store';
import { Film } from '@core/interfaces/film';

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

export const loadInitialUpcomingFilms = createAction(
  '[Film] Load initial upcoming films',
  props<{ category: string }>()
);

export const loadMoreUpcomingFilms = createAction(
  '[Film] Load more upcoming films',
  props<{ category: string }>()
);

export const addUpcomingFilms = createAction(
  '[Film] Add upcoming films',
  props<{ films: Film[] }>()
);
