import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { HostDemoComponent } from '../host-demo/host-demo.component';

@Component({
    selector: 'app-parent-demo',
    imports: [UserCardComponent, HostDemoComponent],
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
