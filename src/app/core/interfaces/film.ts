import { Cast } from '@core/interfaces/cast-response';

export interface Film {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genres?: Genre[];
  backdrop_path?: string;
}

export interface FilmDetails {
  film: Film;
  cast: Cast[];

}

export interface Genre {
  id: number;
  name: string;
}

export interface FilmDetailsState {
  film: Film;
}
