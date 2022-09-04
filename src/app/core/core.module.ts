import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/nav-bar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from '@store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BillboardEffects } from '@store/home';
import { FilmEffects } from '@store/film';
import { CategoryEffects } from '@core/store/category';
import { SearchEffects } from '@store/search/search.effects';

@NgModule({
  imports: [
    NavbarComponent,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([
      BillboardEffects,
      FilmEffects,
      CategoryEffects,
      SearchEffects,
    ]),
  ],
  exports: [NavbarComponent],
  declarations: [],
  providers: [],
})
export class CoreModule {}
