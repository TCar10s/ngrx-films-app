import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Film } from '../../interfaces/billboard-response';
import Swiper from 'swiper';
import { Router } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, AfterViewInit {

  public films$: Observable<Film[]> = this.filmService.films$;
  public routeFilm: string;
  public swiper!: Swiper;

  constructor(private route: Router, private filmService: FilmsService) {
    this.routeFilm = 'https://image.tmdb.org/t/p/w500';
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  ngOnInit(): void {}

  onSlideNext = () => {
    this.swiper.slideNext();
  }

  onSlidePrev = () => {
    this.swiper.slidePrev();
  }

  navigateFilm = (film: Film) => {
    this.route.navigate(['/film', film.id]);
  }
}
