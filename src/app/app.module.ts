import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { CoreModule } from '@core/core.module';

import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from '@state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { BillboardEffects } from '@state/effects/billboard.effects';
import { FilmEffects } from '@state/effects/film.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([BillboardEffects, FilmEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
