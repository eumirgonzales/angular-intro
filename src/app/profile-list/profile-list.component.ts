import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  // @Output() onProfileAdded = new EventEmitter<{}>();
  //<> Means its a generic type
  // Event emitter allows you to emit your own events

  // @Output() onProfileAdded = new EventEmitter<{}>();

  @Output() onProfileAdded = new EventEmitter<{}>();

  profileItems = [];
  // fullName = {};
  // firstName = '';
  // lastName = '';
  // age = '';
  // job = '';


  addProfile(savedFirstName, savedLastName, savedAge) {
    var fullName = {
      firstName: savedFirstName,
      lastName: savedLastName,
      age: savedAge
    };
    this.profileItems.push(fullName);
    this.onProfileAdded.emit(fullName);
  }

  // displayWork(event) {
  //   console.log(event);
  //   this.job = event.title;
  // }

  ngOnInit() {
  }
}

// addProfile(savedFirstName, savedLastName, savedAge) {
//   var fullName = {
//     firstName: savedFirstName,
//     lastName: savedLastName,
//     age: savedAge
//   };

//   this.profileItems.push(fullName);
// }
