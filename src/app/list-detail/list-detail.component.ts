import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/data/expense';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss']
})
export class ListDetailComponent implements OnInit {
  isView:boolean;
  expense:Expense;
  constructor(private router:Router,private route:ActivatedRoute) {
    this.isView=true;
   }
  ngOnInit(): void {
    this.expense = history.state.item;
  }

}
