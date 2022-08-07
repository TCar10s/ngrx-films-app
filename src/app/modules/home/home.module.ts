import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './views/home/home.component';
import { SkeletonModule } from 'primeng/skeleton';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SliderComponent } from './components/slider/slider.component';
import { HomeRoutingModule } from './home-routing.module';
import { FilmsPosterGridModule } from '@shared/films-poster-grid/films-poster-grid.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [HomeComponent, SliderComponent],
  imports: [
    CommonModule,
    SkeletonModule,
    ScrollTopModule,
    HomeRoutingModule,
    FilmsPosterGridModule,
    SwiperModule
  ],
})
export class HomeModule {
}
