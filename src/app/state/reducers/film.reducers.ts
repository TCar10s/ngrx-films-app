import { Film, FilmDetailsState } from '@core/interfaces/film';
import { createReducer, on } from '@ngrx/store';
import {
  addTopRatedFilms,
  loadedFilmDetails,
  loadFilmDetails,
  loadInitialTopRatedFilms,
  loadMoreTopRatedFilms,
} from '@state/actions/film.actions';

export const initialFilmDetailsState: FilmDetailsState = [
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
];

export const topRatedFilmsState: Film[] = [];

export const filmDetailsReducer = createReducer(
  initialFilmDetailsState,
  on(loadFilmDetails, (oldState, film) => ({...oldState, ...film})),
  on(loadedFilmDetails, (oldState, { filmDetails }) =>({...oldState, ...filmDetails}))
);

export const topRatedFilmsReducer = createReducer(
  topRatedFilmsState,
  on(loadInitialTopRatedFilms, (oldState) => oldState),
  on(loadMoreTopRatedFilms, (oldState) => oldState),
  on(addTopRatedFilms, (oldState, { films }) => [...oldState, ...films]),
);
