import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  imports: [],
  templateUrl: './binding-demo.component.html',
  styleUrl: './binding-demo.component.css',
})
export class BindingDemoComponent {
  firstName = signal('Natarajan');
  isDisabled = signal(true);
  menuRole = signal('admin');
  isActive = signal(false);
  buttonClasses = signal({ highlighted: true, disabled: true });
  heightPx = signal('50');
  styles = signal({
    border: '1px solid black',
    'font-weight': 'bold',
  });
  actionLabel = signal('Action');

  toggle() {
    console.log('Toggle button is clicked!');
  }
}
