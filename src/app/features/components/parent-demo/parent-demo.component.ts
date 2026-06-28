import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-parent-demo',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './parent-demo.component.html',
  styleUrl: './parent-demo.component.css',
})
export class ParentDemoComponent {
  name = "Natarajan";
  age = 30;
}
