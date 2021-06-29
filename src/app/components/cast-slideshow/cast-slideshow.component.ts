import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Cast } from '../../interfaces/credits-response';

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css'],
})
export class CastSlideshowComponent implements OnInit, AfterViewInit {
  @Input() cast: Cast[];
  public loader: boolean;
  constructor() {
    this.loader = true;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader = false;
    }, 500);
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 4.3,
      freeMode: true,
      spaceBetween: 15,
    });
  }
}
