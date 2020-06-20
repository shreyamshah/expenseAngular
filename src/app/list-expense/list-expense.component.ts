import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/data/expense';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.scss']
})
export class ListExpenseComponent implements OnInit {
  expenses:Expense[];
  constructor() {
    this.expenses=[
      {
        id:1,
        date:"2020-06-16T17:57:28.556094Z",
        amount:5000000,
        description:null,
        category:"Food"
      },
      {
        id:2,
        date:"2020-06-17T17:57:28.556094Z",
        amount:500,
        description:null,
        category:"Other"
      },
      {
        id:3,
        date:"2020-06-17T17:57:28.556094Z",
        amount:4000,
        description:null,
        category:"Testing something"
      }
    ];
   }

  ngOnInit(): void {
  }
}
