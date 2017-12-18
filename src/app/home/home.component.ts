import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../core/services/income/income.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
 
  constructor(private incomeService: IncomeService) { }
  
  ngOnInit() {
  }
  
}
