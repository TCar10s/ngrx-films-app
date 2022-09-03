import { BillboardState } from '@core/interfaces/billboard-response';
import { ActionReducerMap } from '@ngrx/store';
import { billboardReducer } from '@state/reducers/billboard.reducers';
import { FilmDetailsState } from '@core/interfaces/film';
import { filmDetailsReducer } from '@state/reducers/film.reducers';

export interface AppState {
  billboard: BillboardState;
  filmDetails: FilmDetailsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  billboard: billboardReducer,
  filmDetails: filmDetailsReducer,
};


