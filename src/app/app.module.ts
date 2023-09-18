import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
     SharedModule, AppRoutingModule, BrowserAnimationsModule, BrowserModule, HttpClientModule, CommonModule,
     StoreModule.forRoot({}), StoreModule.forFeature('appState', appReducer), EffectsModule.forRoot([AppEffects],),
     StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production // Restrict extension to log-only mode
      })
    // BrowserModule, AppRoutingModule,  HttpClientModule, CommonModule, BrowserAnimationsModule,
    // StoreModule.forRoot({}), StoreModule.forFeature('appState', appReducer), 
    // EffectsModule.forRoot([AppEffects]), StoreDevtoolsModule.instrument({
    //   maxAge: 25, // Retains last 25 states
    //   logOnly: environment.production // Restrict extension to log-only mode
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
