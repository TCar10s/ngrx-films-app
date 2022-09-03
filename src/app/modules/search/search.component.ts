import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmsService } from 'src/app/core/services/films.service';
import { Film } from '@core/interfaces/film';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  /*
    Obtenemos el valor del url mediante un Observable, ya que cuando
    nos encontremos en este vista el valor puede cambiar.
  */

  public films$!: Observable<Film[]>;
  public textSearch: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmService: FilmsService
  ) {
    this.textSearch = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ text }) => {
      this.searchMovie(text);
      this.textSearch = text;
    });
  }

  searchMovie = (text: string) => {
    this.films$ = this.filmService.searchFilms(text);
  }
}
