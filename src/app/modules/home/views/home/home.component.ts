import { Component, HostListener, OnInit } from '@angular/core';
import { FilmsService } from '@core/services/films.service';
import { UtilitiesService } from '@core/services/utilities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.getMoreFilms();
  }

  constructor(public filmService: FilmsService, private utilitiesService: UtilitiesService) {}

  ngOnInit(): void {
    this.validateFilmsStatus();
  }

  validateFilmsStatus(): void {
    const films = this.filmService.getFilms();

    if (films.length === 0) {
      this.getFilms();
    }
  }

  getFilms = (): void => {
    this.filmService.getBillboard().subscribe((films) => {
      this.filmService.setFilms(films); // BehaviorSubject
    });
  }

  getMoreFilms = () => {
    const positionScroll = this.utilitiesService.calcularPositionScroll();
    const { loadingMoreFilms } = this.filmService;

    if (!positionScroll) { return; }
    if (loadingMoreFilms) { return; }

    this.getFilms();
  }
}
