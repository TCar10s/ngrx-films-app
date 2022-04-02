import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopRatedComponent } from './top-rated.component';

const routes: Routes = [
  {
    path: '',
    component: TopRatedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopRatedRoutingModule {
}
