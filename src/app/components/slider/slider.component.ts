import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Film } from '../../interfaces/billboard-response';
import Swiper from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() films: Film[];
  public routeFilm: string;
  public swiper: Swiper;

  constructor(private route: Router) {
    this.routeFilm = 'https://image.tmdb.org/t/p/original';
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  ngOnInit(): void {
    console.log(this.films);
  }

  onSlideNext = () => {
    this.swiper.slideNext();
  };

  onSlidePrev = () => {
    this.swiper.slidePrev();
  };

  navigateFilm = (film: Film) => {
    this.route.navigate(['/film', film.id]);
  };
}
