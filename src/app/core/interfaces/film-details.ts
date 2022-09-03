export interface FilmDetails {
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface FilmDetailsState {
  film: FilmDetails;
}
