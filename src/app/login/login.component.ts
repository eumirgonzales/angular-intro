import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  firstName = '';
  lastName = '';
  isLoggedIn = false;

  logInUser() {
    this.isLoggedIn = true;
    alert('My full name is: ' + this.firstName + ' ' + this.lastName);
  }

  logOutUser() {
    this.isLoggedIn = false;
  }
}
//ng g componentName
