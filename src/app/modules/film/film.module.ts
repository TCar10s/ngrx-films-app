import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsComponent } from './films.component';
import { PipesModule } from '@shared/pipes/pipes.module';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { RatingModule } from 'ng-starrating';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FilmRoutingModule } from './film-routing.module';
import { StartRatingComponent } from './components/start-rating/start-rating.component';
import { GridCastComponent } from './components/grid-cast/grid-cast.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [FilmsComponent, StartRatingComponent, GridCastComponent, YoutubePlayerComponent],
  imports: [
    CommonModule,
    PipesModule,
    ButtonModule,
    TabViewModule,
    RatingModule,
    YouTubePlayerModule,
    FilmRoutingModule,
    RippleModule,
  ]
})
export class FilmModule {
}
