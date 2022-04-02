import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/app/interfaces/billboard-response';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent implements OnInit {
  public films$!: Observable<Film[]>;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.getMoreFilms();
  }

  constructor(private filmService: FilmsService) {}

  ngOnInit(): void {
    this.getUpcomingFilms();
  }

  getUpcomingFilms = () => {
    this.films$ = this.filmService.getByCategory('upcoming');
  };

  getMoreFilms = () => {
    const pos = document.documentElement.scrollTop + 1000;
    const max = document.documentElement.scrollHeight;

    if (pos > max) {
      // TODO: llamar el servicio
      if (this.filmService.loading) return;
      this.getUpcomingFilms();
    }
  };
}
