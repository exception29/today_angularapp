import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/budget-item.module';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.css']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] = [];
  @Output() delete : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<BudgetItem>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // we want to emit this event so that Parent component Expense can delete it 
  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }

  onCardClicked(item:BudgetItem){
    //show the edit module
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data : item
    });

    dialogRef.afterClosed().subscribe(result => {
      // check if result has a value
      if (result) {
        this.update.emit({
          old: item,
          new: result
        });
      }
    })
  }

}
export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}

