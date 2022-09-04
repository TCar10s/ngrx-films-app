import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/store/app.state';
import { Observable } from 'rxjs';
import { Film } from '@core/interfaces/film';
import { selectBillboardFilms } from '@store/home/billboard.selectors';
import { loadInitialBillboard, loadMoreBillboard } from '@store/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ],
})
export class HomeComponent implements OnInit {

  public films$: Observable<ReadonlyArray<Film>> = this.store.select(selectBillboardFilms);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getInitialFilms();
  }

  getInitialFilms = (): void => {
    this.store.dispatch(loadInitialBillboard());
  }

  loadMoreFilms = (): void => {
    this.store.dispatch(loadMoreBillboard());
  }
}
