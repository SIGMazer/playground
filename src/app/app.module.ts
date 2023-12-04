import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps'

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MapTestComponent } from './map-test/map-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MapTestComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

