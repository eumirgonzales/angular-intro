import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  @Output() workDisplay = new EventEmitter<{}>();

  job = {
    title: 'developer',
    location: 'Wellington'
  };
  constructor() {}

  ngOnInit() {
    console.log(this.job);
    this.workDisplay.emit(this.job);
  }
}
