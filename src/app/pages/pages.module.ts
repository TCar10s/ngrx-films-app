import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

// Primeng
import { DividerModule } from 'primeng/divider';
import { SkeletonModule } from 'primeng/skeleton';

// Components
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [HomeComponent, FilmsComponent, SearchComponent],
  imports: [CommonModule, ComponentsModule, DividerModule, SkeletonModule],
})
export class PagesModule {}
