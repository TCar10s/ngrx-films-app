import { Component, OnInit } from '@angular/core';
import { Film } from '@core/interfaces/film';
import { AppState } from '@core/store/app.state';
import { CategoryActions, selectUpcomingFilms } from '@core/store/category';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent implements OnInit {
  public films$: Observable<Film[]> = this.store.select(selectUpcomingFilms);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getInitialFilms();
  }

  getInitialFilms = (): void => {
    this.store.dispatch(
      CategoryActions.loadInitialUpcomingFilms({ category: 'upcoming' })
    );
  };

  loadMoreFilms = (): void => {
    this.store.dispatch(
      CategoryActions.loadMoreUpcomingFilms({ category: 'upcoming' })
    );
  };
}
