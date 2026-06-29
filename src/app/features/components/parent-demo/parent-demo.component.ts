import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
    selector: 'app-parent-demo',
    imports: [UserCardComponent],
    templateUrl: './parent-demo.component.html',
    styleUrl: './parent-demo.component.css'
})
export class ParentDemoComponent {
  name = "Natarajan";
  age = 30;
  message = '';

  welcomeMessage(greeting: string) {
    this.message = greeting;
  }
}
