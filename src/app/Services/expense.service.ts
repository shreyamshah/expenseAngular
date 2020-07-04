import { Injectable } from '@angular/core';
import { Expense } from 'src/data/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }
  /**
   * getExpense
  : Array<Expense>  */
  public getExpense(id:number) : Array<Expense> {
  return null;    
  }
}
