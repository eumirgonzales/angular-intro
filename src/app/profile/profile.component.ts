import { Component } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  firstName = '';
  lastName = '';
  profiles = [];
  styleExp = 'red';

  addProfile(firstName, lastName) {
    var fullName = firstName + ' ' + lastName;
    this.profiles.push(fullName);
  }
}
