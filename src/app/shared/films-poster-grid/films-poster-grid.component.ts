import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Film } from '@core/interfaces/billboard-response';
import { loadMoreBillboard } from '@state/actions/billboard.actions';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';

@Component({
  selector: 'app-films-poster-grid',
  templateUrl: './films-poster-grid.component.html',
  styleUrls: ['./films-poster-grid.component.css'],
})
export class FilmsPosterGridComponent implements OnInit {
  @Input() films$: Observable<Film[]> = new Observable<Film[]>();

  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {}

  loadMoreFilms = () => {
    this.store.dispatch(loadMoreBillboard());
  }

  viewMoreDetails = (id: number) => {
    this.router.navigate(['/film', id]);
  }
}
