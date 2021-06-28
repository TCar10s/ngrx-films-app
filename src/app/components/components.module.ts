import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

// Others
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

// PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { GalleriaModule } from 'primeng/galleria';

// Components
import { SliderComponent } from './slider/slider.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { FilmsPosterGridComponent } from './films-poster-grid/films-poster-grid.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    SkeletonLoaderComponent,
    FilmsPosterGridComponent,
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    RouterModule,
    GalleriaModule,
    NgxSkeletonLoaderModule,
  ],
  exports: [
    NavbarComponent,
    SliderComponent,
    SkeletonLoaderComponent,
    FilmsPosterGridComponent,
  ],
})
export class ComponentsModule {}
