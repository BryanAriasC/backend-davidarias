import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { DrinkComponent } from './components/drink/drink.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
