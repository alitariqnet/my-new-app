import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aboutChicken = 'I love chicken';
  myBoolean = true;
  
  @Input() object;
  @Output() onYell = new EventEmitter();

  person = {
    name:'Ali',
    profession:'software engineer'
  }

  alertMe(text){
    alert(text);
  }

  fireYellEvent(e){
    this.onYell.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
