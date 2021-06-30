import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Film } from 'src/app/interfaces/billboard-response';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent implements OnInit, OnDestroy {
  public films: Film[];
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.getMoreFilms();
  }

  constructor(private filmService: FilmsService) {}

  ngOnInit(): void {
    this.filmService.getByCategory('upcoming').subscribe((resp) => {
      this.films = resp;
    });
  }

  getMoreFilms = () => {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;

    if (pos > max) {
      // TODO: llamar el servicio
      if (this.filmService.loading) return;
      this.filmService.getByCategory('upcoming').subscribe((films) => {
        this.films.push(...films);
      });
    }
  };

  ngOnDestroy(){
    this.filmService.resetBillboardPage();
  }
}
