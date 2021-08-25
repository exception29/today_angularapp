import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor() { }
  incExp(){
    return [
      {
          id : 1,
          name: "income"
       },
      {
          id:2,
          name:"expense"
      }
    ]

  }

  values(){
    return [
      {
        id: 1,
        name:"Salary"
      },
      {
        id: 1,
        name:"Bonus"
      },
      {
        id: 1,
        name:"Dividend"
      },{
        id: 1,
        name:"Interest"
      },
      {
        id: 1,
        name:"Share Profits"
      },
      {
        id: 2,
        name:"Shopping"
      },
      {
        id: 2,
        name:"Party/ Restaurant"
      },
      {
        id: 2,
        name:"Electricity Bill"
      },{
        id: 2,
        name:"Rent"
      },
      {
        id: 2,
        name:"Medical Emergencies"
      }
    ]
  }
}
