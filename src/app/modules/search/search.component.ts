import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '@core/interfaces/film';
import { AppState } from '@core/store/app.state';
import { searchFilms } from '@core/store/search/search.actions';
import { selectSearchFeature } from '@core/store/search/search.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  /*
    Obtenemos el valor del url mediante un Observable, ya que cuando
    nos encontremos en este vista el valor puede cambiar.
  */

  public films$: Observable<Film[]> = this.store.select(selectSearchFeature);
  public textSearch: string;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {
    this.textSearch = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ text }) => {
      this.searchMovie(text);
      this.textSearch = text;
    });
  }

  searchMovie = (query: string) => {
    this.store.dispatch(searchFilms({ query }));
  };
}
