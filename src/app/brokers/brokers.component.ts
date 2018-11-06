import { Component, OnInit } from '@angular/core';
import { Broker } from '../broker';
import { BROKERS } from '../mock-brokers';

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.css']
})
export class BrokersComponent implements OnInit {

  max_id: number = Math.max.apply(null, BROKERS.map(function (broker) {
    return broker.id;
  }));

  brokers: Broker[] = BROKERS;

  selectedBroker: Broker;

  constructor() { }

  ngOnInit() {
  }

  onSelect(broker: Broker): void {
    this.selectedBroker = broker;
    document.getElementById('brokerInfo')
      .style.display='block';
  }

  static showAddingModal(): void {
    document.getElementById('add-broker-modal')
      .style.display='block';
  }

  addBlocker(name: string, money: string): void {
    this.brokers.push({
      id: ++this.max_id,
      name: name,
      money: Number(money)
    });
    document.getElementById('add-broker-modal')
      .style.display='none';
  }

  deleteBlocker(id: number): void {
    let ind: number = this.brokers.findIndex(function (element: Broker) {
      return element.id === id;
    });
    this.brokers.splice(ind, 1);
    document.getElementById('brokerInfo')
      .style.display='none';
  }
}
