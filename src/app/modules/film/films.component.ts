import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '@core/interfaces/film';
import { Location } from '@angular/common';
import { Cast } from '@core/interfaces/cast-response';
import { Observable } from 'rxjs';
import { Trailer } from '@core/interfaces/trailer-response';
import { AppState } from '@core/store/app.state';
import { Store } from '@ngrx/store';
import { loadFilmDetails, selectCast, selectFilm, selectTrailer } from '@store/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: [ './films.component.css' ],
})
export class FilmsComponent implements OnInit {
  public film$: Observable<Film> = this.store.select(selectFilm);
  public cast$: Observable<Cast[]> = this.store.select(selectCast);
  public trailer$: Observable<Trailer[]> = this.store.select(selectTrailer);

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;
    this.store.dispatch(loadFilmDetails({ id }));
  }

  backPage = (): void => {
    this.location.back();
  }
}
