import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Film } from '@core/interfaces/film';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  @Input() film: Film = {
    id: 0,
    overview: '',
    poster_path: '',
    title: '',
    vote_average: 0,
    genres: []
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
