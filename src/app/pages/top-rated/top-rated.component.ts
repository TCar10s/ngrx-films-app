import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/billboard-response';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css'],
})
export class TopRatedComponent implements OnInit, OnDestroy {
  public films: Film[];
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.getMoreFilms();
  }

  constructor(private filmService: FilmsService) {}

  ngOnInit(): void {
    this.filmService.getByCategory('top_rated').subscribe((resp) => {
      this.films = resp;
    });

    this.filmService.resetBillboardPage();
  }

  getMoreFilms = () => {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max) {
      // TODO: llamar el servicio
      if (this.filmService.loading) return;
      this.filmService.getByCategory('top_rated').subscribe((films) => {
        this.films.push(...films);
      });
    }
  };

  ngOnDestroy() {
    this.filmService.resetBillboardPage();
  }
}
