import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('../assets/data/transactions.json');
  }

  getTransaction(id: string): Observable<Transaction> {
    return this.http.get<Transaction>(`assets/data/${id}.json`);
  }
}
