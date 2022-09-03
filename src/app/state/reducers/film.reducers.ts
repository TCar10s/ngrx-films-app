import { FilmDetailsState } from '@core/interfaces/film-details';
import { createReducer, on } from '@ngrx/store';
import { loadFilmDetails, loadFilmDetailsSuccess } from '@state/actions/film.actions';

export const filmDetailsState: FilmDetailsState = {
  film: {
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
  on(loadFilmDetailsSuccess, (oldState, film) => ({...oldState, ...film})),
);
