import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

// Others
import { SkeletonModule } from 'primeng/skeleton';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';
import { RatingModule } from 'ng-starrating';

// PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaModule } from 'primeng/galleria';

// Components
import { SliderComponent } from './slider/slider.component';
import { FilmsPosterGridComponent } from './films-poster-grid/films-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [NavbarComponent, SliderComponent, FilmsPosterGridComponent],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    RouterModule,
    GalleriaModule,
    LazyLoadImageModule,
    RatingModule,
    PipesModule,
    SkeletonModule,
  ],
  exports: [NavbarComponent, SliderComponent, FilmsPosterGridComponent],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class ComponentsModule {}
