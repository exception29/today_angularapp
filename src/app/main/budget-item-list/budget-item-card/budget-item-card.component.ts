import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from 'src/shared/budget-item.module';


@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.css']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('',0);
  @Output() xButtonClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() cardClick : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
 
  ngOnInit(): void {
  }
  
  //tell parent to  remove that card from list 
  onXButtonClick() {

    this.xButtonClick.emit();
  }

  onCardClick(){
    // emit this event to editing page
      this.cardClick.emit();
  }

}
