import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule)
  },
  {
    path: 'top-rated',
    loadChildren: () => import('./modules/top-rated/top-rated.module').then(m => m.TopRatedModule)
  },
  {
    path: 'upcoming',
    loadChildren: () => import('./modules/upcoming/upcoming.module').then(m => m.UpcomingModule)
  },
  {
    path: 'film',
    loadChildren: () => import('./modules/film/film.module').then(m => m.FilmModule)
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
