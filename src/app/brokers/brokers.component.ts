import { Component, OnInit } from '@angular/core';
import { Broker } from '../broker';
import { ServerinteractionService } from "../serverinteraction.service";

@Component({
  selector: 'app-brokers',
  templateUrl: './brokers.component.html',
  styleUrls: ['./brokers.component.css']
})
export class BrokersComponent implements OnInit {

  brokers: Broker[];

  selectedBroker: Broker;

  max_id: number;

  constructor(private server: ServerinteractionService) { }

  ngOnInit() {
    this.server.getBrockers().subscribe((brokers) => {
      this.brokers = brokers as Broker[];
      this.max_id = Math.max.apply(null, this.brokers.map(function (broker) {
        return broker.id;
      }));
    });
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

  addBrocker(name: string, money: string): void {
    let new_broker = {
      id: ++this.max_id,
      name: name,
      money: Number(money)
    };

    this.brokers.push(new_broker);

    this.server.postBrocker(new_broker);

    document.getElementById('add-broker-modal')
      .style.display='none';
  }

  deleteBrocker(id: number): void {
    let ind: number = this.brokers.findIndex(function (element: Broker) {
      return element.id === id;
    });
    this.brokers.splice(ind, 1);

    this.server.deleteBrocker(ind);
    document.getElementById('brokerInfo')
      .style.display='none';
  }

  updateBrocker(id: number, money: number): void {
    this.server.putBrocker(id, money);
    document.getElementById('brokerInfo').style.display='none';
  }
}
