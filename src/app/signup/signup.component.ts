import { UserService } from './../core/services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../core/services/income/income.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupCredentials: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    verfiyPassword: string,
  } = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verfiyPassword: '',
  };
  constructor(private userService: UserService, private incomeService: IncomeService) { }
  
  ngOnInit( ) {
    this.incomeService.getIncomes()
    .map(response=> {
       console.log('mera response', response);
    });
  }
  onSubmit(credentials) {
    this.userService.signup(this.signupCredentials)
    .subscribe((signedUp) => {
      console.log(signedUp);
    });
  }

}
