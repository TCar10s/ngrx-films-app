import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Film } from '@core/interfaces/film';

@Injectable()
export class TopRatedService {

  private topRatedFilms: BehaviorSubject<Film[]> = new BehaviorSubject<Film[]>([]);
  public topRatedFilms$ = this.topRatedFilms.asObservable();

  constructor() {}

  public setTopRatedFilms(films: Film[]): void {
    this.topRatedFilms.next([...this.topRatedFilms.getValue(), ...films]);
  }

  public getTopRatedFilms(): Film[] {
    return this.topRatedFilms.getValue();
  }
}
