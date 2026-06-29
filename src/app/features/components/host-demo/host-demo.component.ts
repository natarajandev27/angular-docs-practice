import { Component } from '@angular/core';

@Component({
  selector: 'app-host-demo',
  imports: [],
  templateUrl: './host-demo.component.html',
  styleUrl: './host-demo.component.css',
  host: {
    '[style.background]': 'isHovered ? "red" : "green"',
    '(mouseenter)': 'isHovered = true',
    '(mouseleave)': 'isHovered = false'
  },
})
export class HostDemoComponent {
  isHovered = false;
}
