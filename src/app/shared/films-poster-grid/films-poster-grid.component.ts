import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Film } from '@core/interfaces/film';

@Component({
  selector: 'app-films-poster-grid',
  templateUrl: './films-poster-grid.component.html',
  styleUrls: ['./films-poster-grid.component.css'],
})
export class FilmsPosterGridComponent implements OnInit {
  @Input() films$: Observable<Film[]> = new Observable<Film[]>();
  @Output() loadMoreFilms: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewMoreDetails = (id: number) => {
    this.router.navigate(['/film', id]);
  }
}
