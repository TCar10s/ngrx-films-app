import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/interfaces/billboard-response';
import { FilmsService } from 'src/app/services/films.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  /* 
    Obtenemos el valor del url mediante un Observable ya que cuando
    nos encontremos en este vista el valor puiede cambiar.
  */
  public films: Film[];
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

  searchMovie = (text) => {
    this.filmService.searchFilms(text).subscribe((films) => {
      this.films = films;
    });
  };

  ngOnDestroy() {
    this.filmService.resetBillboardPage();
  }
}
