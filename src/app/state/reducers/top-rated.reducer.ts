import { createReducer, on } from '@ngrx/store';
import { topRatedFilmsState } from '@state/reducers/film.reducers';
import {
  addTopRatedFilms,
  loadInitialTopRatedFilms,
  loadMoreTopRatedFilms,
} from '@state/actions/top-rated.actions';

export const topRatedFilmsReducer = createReducer(
  topRatedFilmsState,
  on(loadInitialTopRatedFilms, (oldState) => oldState),
  on(loadMoreTopRatedFilms, (oldState) => oldState),
  on(addTopRatedFilms, (oldState, { films }) => [...oldState, ...films])
);
