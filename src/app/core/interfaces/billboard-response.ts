import { Film } from '@core/interfaces/film';

export interface BillboardResponse {
  dates: Dates;
  page: number;
  results: Film[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export interface BillboardState {
  films: ReadonlyArray<Film>;
  loading: boolean;
}
