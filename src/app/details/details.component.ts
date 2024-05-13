import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  transaction: Transaction | undefined;

  constructor(private route: ActivatedRoute, private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.fetchTransaction();
  }

  fetchTransaction(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.transactionService.getTransaction(id)
        .subscribe(transaction => {
          if (transaction) {
            this.transaction = transaction;
          } else {
            console.error('Transaction not found');
          }
        });
    } else {
       console.error('ID is not provided');
    }
  }
}
