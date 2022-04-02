import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/app/interfaces/billboard-response';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css'],
})
export class TopRatedComponent implements OnInit {
  public films$!: Observable<Film[]>;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.getMoreFilms();
  }

  constructor(private filmService: FilmsService) {}

  ngOnInit(): void {
    this.getTopRatedFilms();
  }

  getTopRatedFilms = () => {
    this.films$ = this.filmService.getByCategory('top_rated');
  };

  getMoreFilms = () => {
    const pos = document.documentElement.scrollTop + 1000;
    const max = document.documentElement.scrollHeight;

    if (pos > max) {
      // TODO: llamar el servicio
      if (this.filmService.loading) return;
      this.getTopRatedFilms();
    }
  };
}
