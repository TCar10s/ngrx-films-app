import { Component, Input, OnInit } from '@angular/core';
import { Film } from '@core/interfaces/film';

@Component({
  selector: 'app-start-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.css']
})
export class StartRatingComponent implements OnInit {

  @Input() film!: Film;

  constructor() {}

  ngOnInit(): void {}
}
