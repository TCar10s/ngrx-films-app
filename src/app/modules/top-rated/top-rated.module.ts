import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRatedComponent } from './top-rated.component';
import { TopRatedRoutingModule } from './top-rated-routing.module';
import { FilmsPosterGridComponent } from '@shared/films-poster-grid/films-poster-grid.component';

@NgModule({
  declarations: [TopRatedComponent],
  imports: [
    CommonModule,
    FilmsPosterGridComponent,
    TopRatedRoutingModule
  ],
})
export class TopRatedModule { }
