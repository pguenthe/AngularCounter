import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndividualCounterComponent } from './individual-counter/individual-counter.component';
import { IndivColorComponent } from './indiv-color/indiv-color.component';

@NgModule({
  declarations: [
    AppComponent,
    IndividualCounterComponent,
    IndivColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
