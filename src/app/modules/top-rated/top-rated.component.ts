import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '@core/interfaces/film';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { selectTopRatedFilms } from '@state/selectors/film.selectors';
import { loadInitialTopRatedFilms, loadMoreTopRatedFilms } from '@state/actions/top-rated.actions';

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
    this.store.dispatch(loadInitialTopRatedFilms({ category: 'top_rated' }));
  }

  loadMoreFilms = (): void => {
    this.store.dispatch(loadMoreTopRatedFilms({ category: 'top_rated' }));
  }
}
