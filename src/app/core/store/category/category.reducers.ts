import { Film } from '@core/interfaces/film';
import { createReducer, on } from '@ngrx/store';
import { CategoryActions } from '@core/store/category';

export const categoryFilmsState: Film[] = [];

export const topRatedFilmsReducer = createReducer(
  categoryFilmsState,
  on(CategoryActions.loadInitialTopRatedFilms, (oldState) => oldState),
  on(CategoryActions.loadMoreTopRatedFilms, (oldState) => oldState),
  on(CategoryActions.addTopRatedFilms, (oldState, { films }) => [
    ...oldState,
    ...films,
  ])
);

export const upcomingFilmsReducer = createReducer(
  categoryFilmsState,
  on(CategoryActions.loadInitialUpcomingFilms, (oldState) => oldState),
  on(CategoryActions.loadMoreUpcomingFilms, (oldState) => oldState),
  on(CategoryActions.addUpcomingFilms, (oldState, { films }) => [
    ...oldState,
    ...films,
  ])
);
