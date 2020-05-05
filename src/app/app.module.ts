import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { FotosMostrarComponent } from './fotos-mostrar/fotos-mostrar.component';

@NgModule({
  declarations: [
    AppComponent,
    FotosMostrarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
