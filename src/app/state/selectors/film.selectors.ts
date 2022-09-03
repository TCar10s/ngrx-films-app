import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { FilmDetailsState } from '@core/interfaces/film-details';

export const selectFilmFeature = (state: AppState) => state.film;

export const selectFilmDetails = createSelector(
  selectFilmFeature,
  (state: FilmDetailsState) => state.film
);

