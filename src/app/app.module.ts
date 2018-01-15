import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Verso1Component } from './verso1/verso1.component';
import { Verso2Component } from './verso2/verso2.component';
import { CuervoimgComponent } from './cuervoimg/cuervoimg.component';

@NgModule({
  declarations: [
    AppComponent,
    Verso1Component,
    Verso2Component,
    CuervoimgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
