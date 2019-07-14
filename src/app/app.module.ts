import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParisComponent } from './paris/paris.component';
import { LyonComponent } from './lyon/lyon.component';
import { MarseilleComponent } from './marseille/marseille.component';

@NgModule({
  declarations: [
    AppComponent,
    ParisComponent,
    LyonComponent,
    MarseilleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
