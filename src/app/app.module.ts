import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { MovieCardComponent } from './pages/list/components/movie-card/movie-card.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './state/effects/product.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ListHeaderComponent } from './pages/list/components/list-header/list-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    MovieCardComponent,
    ListHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    EffectsModule.forRoot([MovieEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
