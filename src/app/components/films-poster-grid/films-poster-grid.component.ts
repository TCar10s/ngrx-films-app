import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-films-poster-grid',
  templateUrl: './films-poster-grid.component.html',
  styleUrls: ['./films-poster-grid.component.css'],
})
export class FilmsPosterGridComponent implements OnInit {
  @Input() films: Film[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.films);
  }
}
