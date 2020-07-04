import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Expense } from 'src/data/expense';
import { ExpenseService } from '../Services/expense.service';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
  isView: boolean;
  expense: Expense;
  @Output() closePanel = new EventEmitter<void>();
  constructor(private router: Router, private route: ActivatedRoute, private expenseService: ExpenseService) {
    this.isView = true;
  }
  ngOnInit(): void {
    //this.expense = history.state.item;
  }
  onEditClick(): void {
    this.isView = false;
  }
  onCloseClick():void{
    this.closePanel.emit();
    console.info("unsubbed");
    this.closePanel.unsubscribe();
  }
}
