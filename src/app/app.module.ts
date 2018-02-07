import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { AppRouterModule } from './app-router/app-router.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './reducers';
import {providers} from './config';

const INITIAL_STATE = {
  users: [],
  loading: false,
  selectedUser: undefined
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AboutModule,
    HomeModule,
    AppRouterModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {initialState: INITIAL_STATE}),
    EffectsModule.forRoot([])
  ],
  providers: [providers],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
