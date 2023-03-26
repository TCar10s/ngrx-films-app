import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '@core/interfaces/film';
import { PrimeNgModule } from '@shared/primeng.module';
import { Observable } from 'rxjs';
import { FilmCardComponent } from './film-card/film-card.component';

@Component({
  selector: 'app-films-poster-grid',
  templateUrl: './films-poster-grid.component.html',
  styleUrls: ['./films-poster-grid.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgModule,
    FilmCardComponent,
  ],
})
export class FilmsPosterGridComponent implements OnInit {
  @Input() films$: Observable<Film[]> = new Observable<Film[]>();
  @Output() loadMoreFilms: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewMoreDetails = (id: number) => {
    this.router.navigate(['/film', id]);
  };
}
