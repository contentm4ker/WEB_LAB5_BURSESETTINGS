import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrokersComponent } from './brokers/brokers.component';
import { StocksComponent } from './stocks/stocks.component';
import { BursesettsComponent } from './bursesetts/bursesetts.component';

const routes: Routes = [
  {path: 'brokers', component: BrokersComponent},
  {path: 'stocks', component: StocksComponent},
  {path: 'settings', component: BursesettsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
