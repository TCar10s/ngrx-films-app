import { Injectable } from '@angular/core';
import { Film } from '@core/interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() {}

  public getScrollPosition(): boolean {
    const pos = Math.ceil(document.documentElement.scrollTop + 1000);
    const max = document.documentElement.scrollHeight;

    return pos > max;
  }

  public adapterFilmsProps(films: Film[]): Film[] {
    return films.map(film => ({
      id: film.id,
      title: film.title,
      poster_path: film.poster_path,
      vote_average: film.vote_average,
      overview: film.overview,
      backdrop_path: film.backdrop_path,
    }));
  }

  public adapterFilmProps(film: Film): Film {
    return {
      id: film.id,
      title: film.title,
      poster_path: film.poster_path,
      vote_average: film.vote_average,
      overview: film.overview,
      backdrop_path: film.backdrop_path,
    };
  }
}
