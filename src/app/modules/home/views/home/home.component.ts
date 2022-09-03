import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { loadInitialBillboard } from '@state/actions/billboard.actions';
import { Film } from '@core/interfaces/billboard-response';
import { Observable } from 'rxjs';
import { selectBillboardFilms } from '@state/selectors/billboard.selectors';

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
}
