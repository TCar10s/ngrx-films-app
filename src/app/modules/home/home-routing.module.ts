import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'film/:id',
    loadChildren: () => import('../film/film.module').then(m => m.FilmModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  providers: [],
})
export class HomeRoutingModule {
}
