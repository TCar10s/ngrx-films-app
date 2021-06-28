import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../../interfaces/billboard-response';

@Component({
  selector: 'app-films-poster-grid',
  templateUrl: './films-poster-grid.component.html',
  styleUrls: ['./films-poster-grid.component.css'],
})
export class FilmsPosterGridComponent implements OnInit {
  @Input() films: Film[];
  public loader: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 1000);
  }
}
