import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsPosterGridComponent } from './films-poster-grid.component';
import { RatingModule } from 'ng-starrating';
import { FilmCardComponent } from './film-card/film-card.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { PosterPipe } from '@shared/pipes/poster.pipe';

@NgModule({
  declarations: [FilmsPosterGridComponent, FilmCardComponent],
  exports: [
    FilmsPosterGridComponent
  ],
  imports: [
    CommonModule,
    RatingModule,
    PosterPipe,
    ButtonModule,
    RippleModule,
    TooltipModule
  ]
})
export class FilmsPosterGridModule { }
