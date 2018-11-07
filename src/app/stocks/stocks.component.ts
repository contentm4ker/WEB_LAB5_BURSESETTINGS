import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import {ServerinteractionService} from "../serverinteraction.service";

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  laws = ['равномерный', 'нормальный', 'биномиальный'];

  stocks: Stock[];

  max_id: number;

  constructor(private server: ServerinteractionService) { }

  ngOnInit() {
    this.server.getStocks().subscribe((stocks) => {
      this.stocks = stocks as Stock[];
      this.max_id = Math.max.apply(null, this.stocks.map(function (stock) {
        return stock.id;
      }));
    });
  }

  onSelect(stock: Stock): void {
    this.deleteStock(stock.id);
  }

  showAddingModal(): void {
    document.getElementById('add-stock-modal')
      .style.display='block';
  }

  addStock(i_law: string, delta: string, amount: string, price: string): void {
    let new_stock = {
      id: ++this.max_id,
      distributionLaw: Number(i_law),
      maxDelta: Number(delta),
      amount: Number(amount),
      startPrice: Number(price),
    };

    this.stocks.push(new_stock);

    this.server.postStock(new_stock);

    document.getElementById('add-stock-modal')
      .style.display='none';
  }

  deleteStock(id: number): void {
    let ind: number = this.stocks.findIndex(function (element: Stock) {
      return element.id === id;
    });
    this.stocks.splice(ind, 1);
    this.server.deleteStock(ind);
  }

}
