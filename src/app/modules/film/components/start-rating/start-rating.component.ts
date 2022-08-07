import { Component, Input, OnInit } from '@angular/core';
import { FilmDetails } from '@core/interfaces/film-details';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.css']
})
export class StartRatingComponent implements OnInit {

  @Input() film!: FilmDetails;

  constructor() {}

  ngOnInit(): void {}
}
