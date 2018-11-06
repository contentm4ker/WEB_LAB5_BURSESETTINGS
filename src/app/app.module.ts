import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrokersComponent } from './brokers/brokers.component';
import { StocksComponent } from './stocks/stocks.component';
import { BursesettsComponent } from './bursesetts/bursesetts.component';

@NgModule({
  declarations: [
    AppComponent,
    BrokersComponent,
    StocksComponent,
    BursesettsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
