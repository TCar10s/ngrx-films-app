import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { BillboardState } from '@core/interfaces/billboard-response';

export const selectBillboardFeature = (state: AppState) => state.billboard;

export const selectBillboardFilms = createSelector(
  selectBillboardFeature,
  (state: BillboardState) => state.films
);

export const selectBillboardLoading = createSelector(
  selectBillboardFeature,
  (state: BillboardState) => state.loading
);
