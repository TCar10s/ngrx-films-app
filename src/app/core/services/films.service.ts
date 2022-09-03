import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BillboardResponse, Film } from '../interfaces/billboard-response';
import { FilmDetails } from '../interfaces/film-details';
import { Cast, CreditsResponse } from '../interfaces/credits-response';
import { Trailer, TrailerResponse } from '../interfaces/trailer-response';
import { environment } from 'src/environments/environment';

/*
  - El operador tab de los rxjs/opetaros, ejecuta cierto código
    cada vez que el observable emita un valor.
  - El operador of transforma el observable que emite el
    valor que proporcionemos.
*/

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private filmByCategory: number;
  public loadingMoreFilms: boolean;
  private billboardPage: number;

  constructor(private http: HttpClient) {
    this.filmByCategory = 1;
    this.billboardPage = 1;
    this.loadingMoreFilms = false;
  }

  get params(): any {
    return {
      api_key: environment.APIKEY,
      language: 'es-ES',
      page: this.billboardPage.toString(),
    };
  }

  getBillboard = (): Observable<Film[]> => {
    console.log(this.billboardPage)
    return this.http
      .get<BillboardResponse>(`${environment.API_URL}/movie/now_playing?`, {
        params: this.params,
      })
      .pipe(
        map(({ results }) => results),
        tap(() => {
          this.billboardPage++;
        })
      );
  }

  searchFilms = (text: string): Observable<Film[]> => {
    const params = { ...this.params, page: '1', query: text };

    return this.http
      .get<BillboardResponse>(`${environment.API_URL}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  }

  getFilmDetails = (id: string) => {
    return this.http
      .get<FilmDetails>(`${environment.API_URL}/movie/${id}`, {
        params: this.params,
      })
      .pipe(
        tap((film) => console.log(film)),
        map((film) => ({
          title: film.title,
          poster_path: film.poster_path,
          vote_average: film.vote_average,
          overview: film.overview,
          genres: film.genres,
        })),
        catchError((error) => of(null))
      );
  }

  getCast = (id: string): Observable<Cast[]> => {
    return this.http
      .get<CreditsResponse>(`${environment.API_URL}/movie/${id}/credits`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.cast),
        map((cast) => cast.filter((actor) => actor.profile_path)),
        catchError((error) => of([]))
      );
  }

  getByCategory = (category: string): Observable<Film[]> => {
    const params = { ...this.params, page: this.filmByCategory.toString() };
    return this.http
      .get<BillboardResponse>(`${environment.API_URL}/movie/${category}`, {
        params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.filmByCategory++;
        }),
        catchError((error) => of([]))
      );
  }

  getTrailer = (id: string): Observable<Trailer[]> => {
    const params = { ...this.params, language: 'en-US' };

    return this.http
      .get<TrailerResponse>(`${environment.API_URL}/movie/${id}/videos`, {
        params,
      })
      .pipe(
        map((resp) => resp.results),
        catchError((error) => of([]))
      );
  }
}
