import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app2';
  showAlert(event) {
    console.log(event);
    alert(event.firstName + ' ' + event.lastName);
  }
}
