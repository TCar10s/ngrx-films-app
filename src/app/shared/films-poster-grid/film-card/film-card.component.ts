import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film, OriginalLanguage } from '@core/interfaces/billboard-response';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  @Input() film: Film = {
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: 0,
    original_language: OriginalLanguage.En,
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: new Date(),
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  };
  @Output() showDetails: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}

  get voteAverage(): number {
    return this.film.vote_average * 0.5;
  }

  viewMoreDetails = ({ id }: Film) => {
    this.showDetails.emit(id);
  }
}
