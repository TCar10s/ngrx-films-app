import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BillboardResponse } from '../interfaces/billboard-response';
import { Film, FilmDetails } from '../interfaces/film';
import { Cast, CastResponse } from '../interfaces/cast-response';
import { Trailer, TrailerResponse } from '../interfaces/trailer-response';
import { environment } from 'src/environments/environment';
import { UtilitiesService } from '@core/services/utilities.service';

/*
  - El operador tab de los rxjs/operators, ejecuta cierto código
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

  constructor(private http: HttpClient, private utilitiesService: UtilitiesService) {
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
    return this.http
      .get<BillboardResponse>(`${environment.API_URL}/movie/now_playing?`, {
        params: this.params,
      })
      .pipe(
        map(({ results }) => results),
        map(this.utilitiesService.adapterFilmsProps),
        tap(() => {
          this.billboardPage++;
        })
      );
  }

  searchFilms = (text: string): Observable<Film[]> => {
    const params = {...this.params, page: '1', query: text};

    return this.http
      .get<BillboardResponse>(`${environment.API_URL}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  }

  getFilm = (id: string): Observable<Film> => {
    return this.http
      .get<Film>(`${environment.API_URL}/movie/${id}`, {
        params: this.params,
      })
      .pipe(
        map(this.utilitiesService.adapterFilmProps),
        catchError((error) => of({} as Film))
      );
  }

  getCast = (id: string): Observable<Cast[]> => {
    return this.http
      .get<CastResponse>(`${environment.API_URL}/movie/${id}/credits`, {
        params: this.params,
      })
      .pipe(
        map(({cast}) =>
          cast.map((actor) => ({
            original_name: actor.original_name,
            profile_path: actor.profile_path,
          }))
          .slice(0, 10)
        ),
        catchError((error) => of([]))
      );
  }

  getTrailer = (id: string): Observable<Trailer[]> => {
    const params = {...this.params, language: 'en-US'};

    return this.http
      .get<TrailerResponse>(`${environment.API_URL}/movie/${id}/videos`, {
        params,
      })
      .pipe(
        map(({ results }) => results),
        map((trailers) => trailers.map((trailer) => ({
          id: trailer.id,
          key: trailer.key,
          name: trailer.name,
        }))),
        catchError((error) => of([]))
      );
  }

  getFilmDetails = (id: string): Observable<FilmDetails> => {
    return combineLatest([
      this.getFilm(id),
      this.getCast(id),
      this.getTrailer(id),
    ]);
  }

  getByCategory = (category: string): Observable<Film[]> => {
    const params = {...this.params, page: this.filmByCategory.toString()};
    return this.http
      .get<BillboardResponse>(`${environment.API_URL}/movie/${category}`, {
        params,
      })
      .pipe(
        map(({ results }) => results),
        map(this.utilitiesService.adapterFilmsProps),
        tap(() => {
          this.filmByCategory++;
        }),
        catchError((error) => of([]))
      );
  }

}
