import { UserService } from './../core/services/user/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signiin',
  templateUrl: './signiin.component.html',
  styleUrls: ['./signiin.component.css']
})
export class SigniinComponent {

  loginCredentials: {
    email: string,
    password: string
  } = {
    email: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  onSubmit(credentials) {
    this.userService.login(this.loginCredentials)
    .subscribe((loggedIn) => {
      console.log(loggedIn);
    });
  }

}
