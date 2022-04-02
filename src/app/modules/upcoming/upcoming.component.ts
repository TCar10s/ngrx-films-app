import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/core/services/films.service';
import { UpcomingFilmsService } from './services/upcoming-films.service';
import { UtilitiesService } from '../../core/services/utilities.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.getMoreFilms();
  }

  constructor(
    private filmService: FilmsService,
    public upcomingFilmsService: UpcomingFilmsService,
    private utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this.validateTopRatedFilmsStatus();
  }

  validateTopRatedFilmsStatus(): void {
    const films = this.upcomingFilmsService.getUpcomingFilms();

    if (films.length === 0) {
      this.getUpcomingFilms();
    }
  }

  getUpcomingFilms = () => {
    this.filmService.getByCategory('upcoming').subscribe(films => {
      this.upcomingFilmsService.setUpcomingFilms(films);
    });
  }

  getMoreFilms = () => {
    const positionScroll = this.utilitiesService.calcularPositionScroll();
    const {loadingMoreFilms} = this.filmService;

    if (!positionScroll) {
      return;
    }
    if (loadingMoreFilms) {
      return;
    }

    this.getUpcomingFilms();
  }
}
