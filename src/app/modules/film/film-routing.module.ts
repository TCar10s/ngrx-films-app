import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films.component';

const routes: Routes = [
  {
    path: ':id',
    component: FilmsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  providers: [],
})
export class FilmRoutingModule {
}
