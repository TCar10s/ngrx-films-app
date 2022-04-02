import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsComponent } from './films.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { RatingModule } from 'ng-starrating';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FilmRoutingModule } from './film-routing.module';

@NgModule({
  declarations: [FilmsComponent],
  imports: [
    CommonModule,
    PipesModule,
    ButtonModule,
    TabViewModule,
    RatingModule,
    YouTubePlayerModule,
    FilmRoutingModule
  ]
})
export class FilmModule { }
