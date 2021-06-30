import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/billboard-response';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css'],
})
export class TopRatedComponent implements OnInit {
  public films: Film[];

  constructor(private filmService: FilmsService) {}

  ngOnInit(): void {
    this.filmService.getByCategory('top_rated').subscribe((resp) => {
      this.films = resp;
    });
  }
}
