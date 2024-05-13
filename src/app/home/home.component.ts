import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private router: Router, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
   this.transactionService.getTransactions()
     .subscribe((transactions: Transaction[]) => this.transactions = transactions);
  }

  sort(key: keyof Transaction): void {
    this.transactions.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
  }

  navigateToDetails(id: string): void {
   this.router.navigate(['/details', id]);
  }

 }
