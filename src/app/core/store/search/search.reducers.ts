import { Film } from '@core/interfaces/film';
import { createReducer, on } from '@ngrx/store';
import { SearchActions } from '.';

export const searchFilmsState: Film[] = [];

export const searchFilmsReducer = createReducer(
  searchFilmsState,
  on(SearchActions.searchFilms, (oldState) => oldState),
  on(SearchActions.loadedSearchFilms, (_, { films }) => films)
);
