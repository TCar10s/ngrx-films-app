import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

// Primeng
import { DividerModule } from 'primeng/divider';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { ScrollTopModule } from 'primeng/scrolltop';
import { TabViewModule } from 'primeng/tabview';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

// Components
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { SearchComponent } from './search/search.component';

// Others
import { RatingModule } from 'ng-starrating';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    HomeComponent,
    FilmsComponent,
    SearchComponent,
    TopRatedComponent,
    UpcomingComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DividerModule,
    SkeletonModule,
    PipesModule,
    RatingModule,
    ButtonModule,
    ScrollTopModule,
    TabViewModule,
    YouTubePlayerModule,
  ],
})
export class PagesModule {}
