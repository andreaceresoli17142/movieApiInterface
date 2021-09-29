import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OnApiResponseComponent } from './on-api-response/on-api-response.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MovieNotFoundComponent } from './movie-not-found/movie-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    OnApiResponseComponent,
    MovieNotFoundComponent,
  ],
  entryComponents:[
    OnApiResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
