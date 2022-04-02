import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { FilmsPosterGridModule } from '../../shared/films-poster-grid/films-poster-grid.module';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FilmsPosterGridModule,
    DividerModule,
  ],
})
export class SearchModule {
}
