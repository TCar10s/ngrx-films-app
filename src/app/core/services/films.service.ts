import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { BillboardResponse, Film } from '../interfaces/billboard-response';
import { FilmDetails } from '../interfaces/film-details';
import { CreditsResponse, Cast } from '../interfaces/credits-response';
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
  private filmByCategorie: number;
  public loading: boolean;

  private films: BehaviorSubject<Film[]> = new BehaviorSubject<Film[]>([]);
  public films$ = this.films.asObservable();

  constructor(private http: HttpClient) {
    this.filmByCategorie = 1;
    this.loading = false;
  }

  public setFilms(films: Film[]): void {
    this.films.next([...this.films.getValue(), ...films]);
  }

  public getFilms(): Film[] {
    return this.films.getValue();
  }

  get params(): any {
    return {
      api_key: environment.APIKEY,
      language: 'es-ES',
      page: '1',
    };
  }

  getBillboard = (): Observable<Film[]> => {
    if (this.loading) { return of([]); } // Cargando películas
    this.loading = true;
    return this.http
      .get<BillboardResponse>(`${environment.APIURL}/movie/now_playing?`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.loading = false;
        })
      );
  };

  searchFilms = (text: string): Observable<Film[]> => {
    const params = { ...this.params, page: '1', query: text };

    return this.http
      .get<BillboardResponse>(`${environment.APIURL}/search/movie`, {
        params,
      })
      .pipe(map((resp) => resp.results));
  };

  getFilmsDetails = (id: string) => {
    return this.http
      .get<FilmDetails>(`${environment.APIURL}/movie/${id}`, {
        params: this.params,
      })
      .pipe(catchError((error) => of(null)));
  }

  getCast = (id: string): Observable<Cast[]> => {
    return this.http
      .get<CreditsResponse>(`${environment.APIURL}/movie/${id}/credits`, {
        params: this.params,
      })
      .pipe(
        map((resp) => resp.cast),
        catchError((error) => of([]))
      );
  }

  getByCategory = (categorie: string): Observable<Film[]> => {
    if (this.loading) { return of([]); } // Cargando películas
    this.loading = true;
    const params = { ...this.params, page: this.filmByCategorie.toString() };
    return this.http
      .get<BillboardResponse>(`${environment.APIURL}/movie/${categorie}`, {
        params,
      })
      .pipe(
        map((resp) => resp.results),
        tap(() => {
          this.filmByCategorie++;
          this.loading = false;
        }),
        catchError((error) => of([]))
      );
  }

  getTrailer = (id: string): Observable<Trailer[]> => {
    const params = { ...this.params, language: 'en-US' };

    return this.http
      .get<TrailerResponse>(`${environment.APIURL}/movie/${id}/videos`, {
        params,
      })
      .pipe(
        map((resp) => resp.results),
        catchError((error) => of([]))
      );
  }
}
