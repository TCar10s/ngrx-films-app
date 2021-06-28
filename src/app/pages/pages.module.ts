import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

// Primeng
import { DividerModule } from 'primeng/divider';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

// Components
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { SearchComponent } from './search/search.component';

// Others
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [HomeComponent, FilmsComponent, SearchComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    DividerModule,
    SkeletonModule,
    PipesModule,
    RatingModule,
    ButtonModule,
  ],
})
export class PagesModule {}
