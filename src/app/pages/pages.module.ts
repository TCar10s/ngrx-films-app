import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

// Components
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [HomeComponent, FilmsComponent, SearchComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
