// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';

// Routes
import { AppRoutingModule } from './app.routes';

// Modules
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

// Primeng
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    ScrollPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
