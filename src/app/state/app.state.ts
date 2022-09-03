import { BillboardState } from '@core/interfaces/billboard-response';
import { ActionReducerMap } from '@ngrx/store';
import { billboardReducer } from '@state/reducers/billboard.reducers';
import { Film, FilmDetailsState } from '@core/interfaces/film';
import { filmDetailsReducer, topRatedFilmsReducer } from '@state/reducers/film.reducers';

export interface AppState {
  billboard: BillboardState;
  filmDetails: FilmDetailsState;
  topRatedFilms: Film[];
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  billboard: billboardReducer,
  filmDetails: filmDetailsReducer,
  topRatedFilms: topRatedFilmsReducer,
};


