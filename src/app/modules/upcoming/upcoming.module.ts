import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingComponent } from './upcoming.component';
import { FilmsPosterGridModule } from '../../shared/films-poster-grid/films-poster-grid.module';
import { UpcomingRoutingModule } from './upcoming-routing.module';

@NgModule({
  declarations: [UpcomingComponent],
  imports: [
    CommonModule,
    FilmsPosterGridModule,
    UpcomingRoutingModule
  ]
})
export class UpcomingModule {
}
