import { Component, OnInit } from '@angular/core';
import { Broker } from '../broker';
import { BROKERS } from '../mock-brokers';

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.css']
})
export class BrokersComponent implements OnInit {

  constructor() { }

  brokers: Broker[] = BROKERS;

  selectedBroker: Broker;

  ngOnInit() {
  }

  onSelect(broker: Broker): void {
    this.selectedBroker = broker;
    document.getElementById('brokerInfo')
      .style.display='block';
  }

  showAddingModal(): void {
    document.getElementById('add-broker-modal')
      .style.display='block';
  }

  addBlocker(name: string, money: string): void {
    let len = this.brokers.length;
    let id = this.brokers[len-1].id++;
    this.brokers.push({
      id: id,
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
