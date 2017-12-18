import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";


@Injectable()
export class ExpenseService {
  constructor(private http: HttpClient) {}

  getExpenses(): Observable<any> {
    const storedToken = this.getToken();
    return this.http.get<any>(`http://localhost:9000/expenses?token=${storedToken}`);
 }

 getToken(): string {
    return localStorage.getItem('token');
 }

 postNewUserExpense(credentials: {
    category: string,
    amount: number,
    tags: [string]
  }) : Observable<any> {
    const storedToken = this.getToken();
    return this.http.post<{ newIncome: any }>(`http://localhost:9000/expenses?token=${storedToken}`, {
      category: credentials.category,
      amount: credentials.amount,
      tags: credentials.tags
    })
  }

  getYearExpense() : Observable<any> {
    const storedToken = this.getToken();    
    return this.http.get<any>(`http://localhost:9000/expenses/thisyear?token=${storedToken}`);
  }

  getThisMonthExpense() : Observable<any> {
    const storedToken = this.getToken();    
    return this.http.get<any>(`http://localhost:9000/expenses/thismonth?token=${storedToken}`);
  }

  getLastMonthExpense() : Observable<any> {
    const storedToken = this.getToken();    
    return this.http.get<any>(`http://localhost:9000/expenses/lastmonth?token=${storedToken}`);
  }
}