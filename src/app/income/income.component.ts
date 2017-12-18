import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../core/services/income/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  
  incomes;
  incomeCredentials: {
    category: string,
    amount: number,
    tags: [string]
  } = {
    category: '',
    amount: 0,
    tags: ['']
  };
  constructor(private incomeService: IncomeService) { }

  ngOnInit() {
     this.getIncomesByCallingIncomeService();
  }
  
  onSubmit(credential) {
    this.incomeService.postNewUserIncome(this.incomeCredentials)
        .subscribe(newIncome => {
          console.log(newIncome);
          this.getIncomesByCallingIncomeService();
        });
  }

  getIncomesByCallingIncomeService() {
    this.incomeService.getIncomes()
    .subscribe(response => {
      console.log(response);
       this.incomes = response;
    });
  }
}
