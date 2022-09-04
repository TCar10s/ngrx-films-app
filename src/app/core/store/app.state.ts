import { BillboardState } from '@core/interfaces/billboard-response';
import { ActionReducerMap } from '@ngrx/store';
import { billboardReducer } from '@store/home/billboard.reducers';
import { Film, FilmDetailsState } from '@core/interfaces/film';
import { filmDetailsReducer } from '@store/film';
import { topRatedFilmsReducer, upcomingFilmsReducer } from './category';

export interface AppState {
  billboard: BillboardState;
  filmDetails: FilmDetailsState;
  topRatedFilms: Film[];
  upcomingFilms: Film[];
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  billboard: billboardReducer,
  filmDetails: filmDetailsReducer,
  topRatedFilms: topRatedFilmsReducer,
  upcomingFilms: upcomingFilmsReducer,
};


