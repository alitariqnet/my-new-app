import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ROUTER_PROVIDERS } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello from angular and ali';
  object = {
    name:'Ali',
    email:'alibaba420pk@yahoo.com'
  }

  yell(e){
    alert("I am yelling");
    console.log(e);
  }
}
