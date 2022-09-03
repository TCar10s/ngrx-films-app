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
