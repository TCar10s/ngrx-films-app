import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Film } from '@core/interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class UpcomingFilmsService {

  private upcomingFilms: BehaviorSubject<Film[]> = new BehaviorSubject<Film[]>([]);
  public upcomingFilms$ = this.upcomingFilms.asObservable();

  constructor() {}

  public setUpcomingFilms(films: Film[]): void {
    this.upcomingFilms.next([...this.upcomingFilms.getValue(), ...films]);
  }

  public getUpcomingFilms(): Film[] {
    return this.upcomingFilms.getValue();
  }
}
