import { Component } from '@angular/core';

@Component({
    selector : 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
    firstName = '';
    lastName = '';

    alertProfile(){
        alert(this.firstName + ' ' + this.lastName);
    }
}