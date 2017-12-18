import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Injectable()
export class IncomeService {
  constructor(
      private http: HttpClient,
      private router: Router) {}
  
  getIncomes(): Observable<any> {
     const storedToken = this.getToken();
     return this.http.get<any>(`http://localhost:9000/incomes?token=${storedToken}`);
      //  .map(response => {
      //      console.log(response);
      //  })

  }
  
  getYearIncome() : Observable<any> {
    const storedToken = this.getToken();    
    return this.http.get<any>(`http://localhost:9000/incomes/thisyear?token=${storedToken}`);
  }

  getThisMonthIncome() : Observable<any> {
    const storedToken = this.getToken();    
    return this.http.get<any>(`http://localhost:9000/incomes/thismonth?token=${storedToken}`);
  }

  getLastMonthIncome() : Observable<any> {
    const storedToken = this.getToken();    
    return this.http.get<any>(`http://localhost:9000/incomes/lastmonth?token=${storedToken}`);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  postNewUserIncome(credentials: {
    category: string,
    amount: number,
    tags: [string]
  }) : Observable<any> {
    const storedToken = this.getToken();
    return this.http.post<{ newIncome: any }>(`http://localhost:9000/incomes?token=${storedToken}`, {
      category: credentials.category,
      amount: credentials.amount,
      tags: credentials.tags
    })
  }
}