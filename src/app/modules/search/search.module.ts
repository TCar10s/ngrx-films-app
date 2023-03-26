import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { PrimeNgModule } from '@shared/primeng.module';
import { FilmsPosterGridComponent } from '@shared/films-poster-grid/films-poster-grid.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FilmsPosterGridComponent,
    PrimeNgModule,
  ],
})
export class SearchModule {}
