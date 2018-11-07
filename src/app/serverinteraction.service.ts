import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ServerinteractionService {
  constructor(private http: HttpClient) {}


  getBrockers(): Observable<Object> {
    return this.http.get('/api/brockers');
  }

  getStocks(): Observable<Object> {
    return this.http.get('/api/stocks');
  }

  getSettings(): Observable<Object> {
    return this.http.get('/api/settings');
  }

  postBrocker(new_broker): void {
    this.http.post('/api/brockers', new_broker).subscribe();
  }

  postStock(stock): void {
    this.http.post('/api/stocks', stock).subscribe();
  }

  deleteStock(ind): void {
    this.http.delete(`/api/stocks/${ind}`).subscribe();
  }

  deleteBrocker(ind): void {
    this.http.delete(`/api/brockers/${ind}`).subscribe();
  }

  putBrocker(id, money): void {
    this.http.put('/api/brockers', {id: id, money: money}).subscribe();
  }

  putSettings(setts): void {
    this.http.put('/api/settings', setts).subscribe();
  }
}
