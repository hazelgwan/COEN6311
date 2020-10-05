import { Component, OnInit } from '@angular/core';
import { transaction } from '../../transaction';
import { TRANSACTIONS } from '../../mockData';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions = TRANSACTIONS;
  selectedtransaction: transaction;
  transactionDetails(transaction){
    this.selectedtransaction = transaction;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
