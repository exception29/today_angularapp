import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/budget-item.module';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount
  }

  deleteItem(item:BudgetItem){
    //removing item from array
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount

   // this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEvent) {
    // result is the update budget item
    // replace the item with the updated/submitted item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;

    // update the total budget
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }

}

 
  

