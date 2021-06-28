import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Film } from '../../interfaces/billboard-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() films: Film[];
  public route: string;
  public swiper: Swiper;

  constructor() {
    this.route = 'https://image.tmdb.org/t/p/original';
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }

  ngOnInit(): void {
    console.log(this.films);
  }

  onSlideNext() {
    this.swiper.slideNext();
  }

  onSlidePrev() {
    this.swiper.slidePrev();
  }
}
