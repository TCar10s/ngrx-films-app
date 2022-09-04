import { BillboardState } from '@core/interfaces/billboard-response';
import { createReducer, on } from '@ngrx/store';
import { addFilmsToBillboard, loadInitialBillboard, loadMoreBillboard } from './billboard.actions';

export const initialBillboardState: BillboardState = {
  films: [],
  loading: false,
};

export const billboardReducer = createReducer(
  initialBillboardState,
  on(loadInitialBillboard, oldState => ({...oldState, loading: true})),
  on(loadMoreBillboard, oldState => ({...oldState, loading: false})),
  on(addFilmsToBillboard, (oldState, {films}) => ({
    ...oldState,
    films: [ ...oldState.films, ...films ],
    loading: false
  })),
);
