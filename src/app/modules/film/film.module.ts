import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsComponent } from './films.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { RatingModule } from 'ng-starrating';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FilmRoutingModule } from './film-routing.module';
import { StartRatingComponent } from './components/start-rating/start-rating.component';
import { GridCastComponent } from './components/grid-cast/grid-cast.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { RippleModule } from 'primeng/ripple';
import { ChipModule } from 'primeng/chip';
import { PosterPipe } from '@shared/pipes/poster.pipe';

@NgModule({
  declarations: [ FilmsComponent, StartRatingComponent, GridCastComponent, YoutubePlayerComponent ],
  imports: [
    CommonModule,
    PosterPipe,
    ButtonModule,
    TabViewModule,
    RatingModule,
    YouTubePlayerModule,
    FilmRoutingModule,
    RippleModule,
    ChipModule,
  ]
})
export class FilmModule {
}
