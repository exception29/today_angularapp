import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpensesService } from 'src/app/services/expenses.service';
import { BudgetItem } from 'src/shared/budget-item.module';


@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})



export class AddItemFormComponent implements OnInit {

  incomeExp: any = []
  budget:any = []
  
  // getting user input and sending to class
  // getting user input and sending to class

  @Input() item!: BudgetItem;
  isNewItem!: boolean;

  //sending values to Parent ie. Expenses Page
  @Output() formSubmit : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor(private expapi: ExpensesService) { }

  ngOnInit(){

    this.incomeExp = this.expapi.incExp();
    //console.log(this.incomeExp)
    // if item has a value
    if (this.item) {
      // this means that an existing item object was passed into this component
      // therefore this is not a new item
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', 0);
    }
   
  }



  onSubmit(form:NgForm){
    // emit form to budget-itm-list
    this.formSubmit.emit(form.value);
    form.reset();
  }

  onSelect(incomeExp:any){
    //console.log(incomeExp.target.value)
    this.budget = this.expapi.values().filter(e => e.id == incomeExp.target.value);
    console.log(this.budget)

  }
}
