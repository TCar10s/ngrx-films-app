import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { BillboardResponse, Film } from '../interfaces/billboard-response';
import { FilmDetails } from '../interfaces/film-details';
import { CreditsResponse, Cast } from '../interfaces/credits-response';

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
  private baseUrl: string;
  private billboardPage: number;
  public loading: boolean;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3';
    this.billboardPage = 1;
    this.loading = false;
  }

  get params() {
    return {
      api_key: '53ceb5e3f56ca0319b494fb285f4283a',
      language: 'es-ES',
      page: this.billboardPage.toString(),
    };
  }

  resetBillboardPage = () => {
    this.billboardPage = 1;
  };

  getBillboard = (): Observable<Film[]> => {
    if (this.loading) return of([]); // Cargando películas
    this.loading = true;
    return this.http
      .get<BillboardResponse>(`${this.baseUrl}/movie/now_playing?`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.billboardPage++;
          this.loading = false;
        })
      );
  };

  searchFilms = (text: string): Observable<Film[]> => {
    const params = { ...this.params, page: '1', query: text };

    return this.http
      .get<BillboardResponse>(`${this.baseUrl}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  };

  getFilmsDetails = (id: string) => {
    return this.http
      .get<FilmDetails>(`${this.baseUrl}/movie/${id}`, {
        params: this.params,
      })
      .pipe(catchError((error) => of(null)));
  };

  getCast = (id: string): Observable<Cast[]> => {
    return this.http
      .get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.cast),
        catchError((error) => of([]))
      );
  };

  getByCategory = (categorie: string): Observable<Film[]> => {
    const params = { ...this.params, page: '1' };
    return this.http
      .get<BillboardResponse>(`${this.baseUrl}/movie/${categorie}`, {
        params,
      })
      .pipe(
        map((resp) => resp.results),
        catchError((error) => of([]))
      );
  };
}
