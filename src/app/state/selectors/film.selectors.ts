import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { FilmDetailsState } from '@core/interfaces/film';

export const selectFilmFeature = (state: AppState) => state.filmDetails;

export const selectFilm = createSelector(
  selectFilmFeature,
  (state: FilmDetailsState) => state[0]
);

export const selectCast = createSelector(
  selectFilmFeature,
  (state: FilmDetailsState) => state[1]
);

export const selectTrailer = createSelector(
  selectFilmFeature,
  (state: FilmDetailsState) => state[2]
);

export const selectTopRatedFilms = (state: AppState) => state.topRatedFilms;
