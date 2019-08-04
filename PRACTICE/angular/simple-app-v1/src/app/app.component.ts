import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple App 2.0';

  constructor() {

    interface Person {
      id: number,
      name: string
    }
  }
}
