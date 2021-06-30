import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { FilmsComponent } from './pages/films/films.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'film/:id',
    component: FilmsComponent,
  },
  {
    path: 'search/:text',
    component: SearchComponent,
  },
  {
    path: 'top-rated',
    component: TopRatedComponent,
  },
  {
    path: 'upcoming',
    component: UpcomingComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [
    // Los otros moódulos solo podran tener acceso (ver) estas exportaciones.
    RouterModule,
  ],
})
export class AppRoutingModule {}
