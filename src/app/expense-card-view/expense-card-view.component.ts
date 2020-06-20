import { Expense } from 'src/data/expense';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'expense-card-view',
  templateUrl: './expense-card-view.component.html',
  styleUrls: ['./expense-card-view.component.scss']
})
export class ExpenseCardViewComponent implements OnInit {
  @Input("expense")
  item:Expense;

  constructor() { }

  ngOnInit(): void {
  }
  onCardClick() {
    
  }
}
