import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';
import { Film } from '@core/interfaces/film';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @ViewChild('swiper', {static: false}) swiper?: SwiperComponent;

  @Input() films$: Observable<Film[]>;
  public routeFilm: string;

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: true,
  };

  constructor(private route: Router) {
    this.films$ = new Observable<Film[]>();
    this.routeFilm = 'https://image.tmdb.org/t/p/original';
  }

  ngOnInit(): void {}

  navigateFilm = (film: Film) => {
    this.route.navigate(['/film', film.id]);
  }
}
