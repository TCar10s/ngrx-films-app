import { Cast } from '@core/interfaces/cast-response';
import { Trailer } from '@core/interfaces/trailer-response';

export interface Film {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genres?: Genre[];
  backdrop_path?: string;
}

export type FilmDetails = [Film, Cast[], Trailer[]];

export interface Genre {
  id: number;
  name: string;
}

export type FilmDetailsState = FilmDetails;
