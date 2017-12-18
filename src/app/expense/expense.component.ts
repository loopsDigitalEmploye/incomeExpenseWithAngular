import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../core/services/expense/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  
  expenseCredentials: {
    category: string,
    amount: number,
    tags: [string]
  } = {
    category: '',
    amount: 0,
    tags: ['']
  };
  expenses;
  constructor(private expenseService: ExpenseService) { }
  
  ngOnInit() {
    this.getIncomesByCallingExpenseService();
 }
 
 onSubmit(credential) {
   this.expenseService.postNewUserExpense(this.expenseCredentials)
       .subscribe(newIncome => {
         console.log(newIncome);
         this.getIncomesByCallingExpenseService();
       });
 }

 getIncomesByCallingExpenseService() {
  this.expenseService.getExpenses()
     .subscribe(response => {
          console.log(response);
          this.expenses = response;
  });
}

}
