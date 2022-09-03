import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/app/core/interfaces/billboard-response';
import { FilmsService } from 'src/app/core/services/films.service';
import { TopRatedService } from './services/top-rated.service';
import { UtilitiesService } from '@core/services/utilities.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css'],
})
export class TopRatedComponent implements OnInit {
  public films$!: Observable<Film[]>;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.getMoreFilms();
  }

  constructor(
    private filmService: FilmsService,
    private utilitiesService: UtilitiesService,
    public topRatedService: TopRatedService
  ) {
  }

  ngOnInit(): void {
    this.validateRatedFilmsStatus();
  }

  validateRatedFilmsStatus(): void {
    const films = this.topRatedService.getTopRatedFilms();

    if (films.length === 0) {
      this.getTopRatedFilms();
    }
  }

  getTopRatedFilms = () => {
    this.filmService.getByCategory('top_rated').subscribe(films => {
      this.topRatedService.setTopRatedFilms(films); // BehaviorSubject
    });
  }

  getMoreFilms = () => {
    const positionScroll = this.utilitiesService.getScrollPosition();
    const {loadingMoreFilms} = this.filmService;

    if (!positionScroll) {
      return;
    }
    if (loadingMoreFilms) {
      return;
    }

    this.getTopRatedFilms();
  }
}
