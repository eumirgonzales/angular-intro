import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() profileList = {};

  // @Input() profileList = {};
  // profiles = [];
  // firstName = '';
  // lastName = '';
  // age = '';
  // addProfile(savedFirstName, savedLastName, savedAge) {
  //   var fullName = {
  //     firstName: savedFirstName,
  //     lastName: savedLastName,
  //     age: savedAge
  //   };
  //   this.profiles.push(fullName);
  // }
}

// @Input() profileList = {};
