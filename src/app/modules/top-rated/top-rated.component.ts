import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '@core/interfaces/film';
import { Store } from '@ngrx/store';
import { AppState } from '@core/store/app.state';
import { selectTopRatedFilms } from '@core/store/category';
import { CategoryActions } from '@core/store/category';
import { CATEGORIES } from '@core/utils/stote.enums';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css'],
})
export class TopRatedComponent implements OnInit {
  public films$: Observable<Film[]> = this.store.select(selectTopRatedFilms);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getInitialFilms();
  }

  getInitialFilms = (): void => {
    this.store.dispatch(CategoryActions.loadInitialTopRatedFilms({ category: CATEGORIES.TopRated }));
  };

  loadMoreFilms = (): void => {
    this.store.dispatch(CategoryActions.loadMoreTopRatedFilms({ category: CATEGORIES.TopRated }));
  };
}
