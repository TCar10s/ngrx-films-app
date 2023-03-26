import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpcomingComponent } from './upcoming.component';
import { UpcomingRoutingModule } from './upcoming-routing.module';
import { FilmsPosterGridComponent } from '@shared/films-poster-grid/films-poster-grid.component';

@NgModule({
  declarations: [UpcomingComponent],
  imports: [CommonModule, FilmsPosterGridComponent, UpcomingRoutingModule],
})
export class UpcomingModule {}
