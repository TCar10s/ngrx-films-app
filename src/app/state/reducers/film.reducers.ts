import { FilmDetailsState } from '@core/interfaces/film';
import { createReducer, on } from '@ngrx/store';
import { loadFilmDetails, loadedFilmDetails } from '@state/actions/film.actions';

export const filmDetailsState: FilmDetailsState = {
  film: {
    id: 0,
    overview: '',
    poster_path: '',
    title: '',
    vote_average: 0,
    genres: [],
  }
};

export const filmDetailsReducer = createReducer(
  filmDetailsState,
  on(loadFilmDetails, (oldState, film) => ({...oldState, ...film})),
  on(loadedFilmDetails, (oldState, film) => ({...oldState, ...film})),
);
