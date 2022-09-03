import { FilmDetailsState } from '@core/interfaces/film';
import { createReducer, on } from '@ngrx/store';
import { loadFilmDetails, loadedFilmDetails } from '@state/actions/film.actions';

export const filmDetailsState: FilmDetailsState = [
  {
    id: 0,
    overview: '',
    poster_path: '',
    title: '',
    vote_average: 0,
    genres: [],
    backdrop_path: '',
  },
  [{ original_name: '', profile_path: '' }],
  [{ id: '', key: '', name: '' }]
]

export const filmDetailsReducer = createReducer(
  filmDetailsState,
  on(loadFilmDetails, (oldState, film) => ({...oldState, ...film})),
  on(loadedFilmDetails, (oldState, { filmDetails }) =>({...oldState, ...filmDetails}))
);
