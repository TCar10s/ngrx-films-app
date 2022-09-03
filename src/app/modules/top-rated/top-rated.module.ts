import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRatedComponent } from './top-rated.component';
import { FilmsPosterGridModule } from '@shared/films-poster-grid/films-poster-grid.module';
import { TopRatedRoutingModule } from './top-rated-routing.module';

@NgModule({
  declarations: [TopRatedComponent],
  imports: [
    CommonModule,
    FilmsPosterGridModule,
    TopRatedRoutingModule
  ],
})
export class TopRatedModule { }
