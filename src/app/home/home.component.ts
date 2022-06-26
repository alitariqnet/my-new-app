import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aboutChicken = 'I love chicken';
  myBoolean = true;

  object = {
    name:'ali',
    age:30
  }
  alertMe(text){
    alert(text);
  }
  constructor() { }

  ngOnInit() {
  }

}
