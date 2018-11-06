import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { STOCKS } from '../mock-stocks';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  max_id: number = Math.max.apply(null, STOCKS.map(function (stock) {
    return stock.id;
  }));

  laws = ['равномерный', 'нормальный', 'биномиальный'];

  stocks: Stock[] = STOCKS;

  constructor() { }

  ngOnInit() {
  }

  onSelect(stock: Stock): void {
    this.deleteStock(stock.id);
  }

  static showAddingModal(): void {
    document.getElementById('add-stock-modal')
      .style.display='block';
  }

  addStock(i_law: string, delta: string, amount: string, price: string): void {
    this.stocks.push({
      id: ++this.max_id,
      distributionLaw: Number(i_law),
      maxDelta: Number(delta),
      amount: Number(amount),
      startPrice: Number(price),
    });
    document.getElementById('add-stock-modal')
      .style.display='none';
  }

  deleteStock(id: number): void {
    let ind: number = this.stocks.findIndex(function (element: Stock) {
      return element.id === id;
    });
    this.stocks.splice(ind, 1);
  }

}
