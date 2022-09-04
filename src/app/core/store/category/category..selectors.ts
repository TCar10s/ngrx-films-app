import { AppState } from '@store/app.state';

export const selectTopRatedFilms = (state: AppState) => state.topRatedFilms;
export const selectUpcomingFilms = (state: AppState) => state.upcomingFilms;
