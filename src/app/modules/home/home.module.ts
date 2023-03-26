import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './views/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeRoutingModule } from './home-routing.module';
import { SwiperModule } from 'swiper/angular';
import { PrimeNgModule } from '@shared/primeng.module';
import { FilmsPosterGridComponent } from '@shared/films-poster-grid/films-poster-grid.component';

@NgModule({
  declarations: [HomeComponent, SliderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FilmsPosterGridComponent,
    SwiperModule,
    PrimeNgModule,
  ],
})
export class HomeModule {}
