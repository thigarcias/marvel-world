import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelComponent } from './marvel/marvel.component';
import { TableMarvelComponent } from './table-marvel/table-marvel.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    TableMarvelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
