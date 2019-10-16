import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BasicsTDD';
  myVar = 'Hello world';
  greet = 'Hello Alejandro, how are you?';

  pair(number_to_verify: number):boolean {
    return number_to_verify%2===0 ? true : false;
  }
}
