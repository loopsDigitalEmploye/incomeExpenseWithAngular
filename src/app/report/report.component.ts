import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../core/services/income/income.service';
import { ExpenseService } from '../core/services/expense/expense.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  
  yearIncome = 0;
  thisMonthIncome = 0;
  lastMonthIncome = 0;
  
  yearExpense = 0;
  thisMonthExpense = 0;
  lastMonthExpense = 0; 

  constructor(private incomeService: IncomeService, private expenseService: ExpenseService) { }

  ngOnInit() {
    //Income calls
    this.incomeService.getYearIncome()
        .subscribe(income => { this.yearIncome = income; });

    this.incomeService.getThisMonthIncome()
        .subscribe(income => { this.thisMonthIncome = income; });

    this.incomeService.getLastMonthIncome()
        .subscribe(income => { this.lastMonthIncome = income; });

    //Expense calls    
    this.expenseService.getYearExpense()
        .subscribe(expense => { this.yearExpense = expense; });

    this.expenseService.getThisMonthExpense()
        .subscribe(expense => { this.expenseService = expense; });

    this.expenseService.getLastMonthExpense()
        .subscribe(expense => { this.lastMonthExpense = expense; });
  }    
  }
   
}
