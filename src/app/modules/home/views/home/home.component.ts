import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { loadInitialBillboard, loadMoreBillboard } from '@state/actions/billboard.actions';
import { Observable } from 'rxjs';
import { selectBillboardFilms } from '@state/selectors/billboard.selectors';
import { Film } from '@core/interfaces/film';

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
