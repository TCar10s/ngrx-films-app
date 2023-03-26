import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsComponent } from './films.component';
import { RatingModule } from 'ng-starrating';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FilmRoutingModule } from './film-routing.module';
import { StartRatingComponent } from './components/start-rating/start-rating.component';
import { GridCastComponent } from './components/grid-cast/grid-cast.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { PosterPipe } from '@shared/pipes/poster.pipe';
import { PrimeNgModule } from '@shared/primeng.module';

@NgModule({
  declarations: [
    FilmsComponent,
    StartRatingComponent,
    GridCastComponent,
    YoutubePlayerComponent,
  ],
  imports: [
    CommonModule,
    PosterPipe,
    RatingModule,
    YouTubePlayerModule,
    FilmRoutingModule,
    PrimeNgModule,
  ],
})
export class FilmModule {}
