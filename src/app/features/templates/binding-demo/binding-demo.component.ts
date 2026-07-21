import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from '../pipes/pipes.component';
import { BaseButtonComponent } from '../base-button/base-button.component';
import { FragRendererComponent } from '../frag-renderer/frag-renderer.component';
import { NgTemplateOutlet } from '@angular/common';
import { HeavyWidgetComponent } from "../heavy-widget/heavy-widget.component";

@Component({
  selector: 'app-binding-demo',
  imports: [
    FormsModule,
    // PipesComponent,
    // BaseButtonComponent,
    // FragRendererComponent,y
    NgTemplateOutlet,
    HeavyWidgetComponent
],
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

  /*For block*/
  items = signal([
    { id: 0, name: 'Ground' },
    { id: 0, name: 'Air' },
    { id: 0, name: 'Sea' },
  ]);

  addTop() {
    this.items.update((list) => [{ id: Date.now(), name: 'NEW' }, ...list]);
  }

  /*If block*/
  score = signal(75);

  setScore(n: number) {
    this.score.set(n);
  }

  user = signal({ name: 'Natarajan', email: 'natarajan@gmail.com' });

  /*Switch block*/
  status = signal<'loading' | 'success' | 'error'>('loading');

  setStatus(s: 'loading' | 'success' | 'error') {
    this.status.set(s);
  }

  /*Two way binding*/
  name = signal('Natarajan');

  // Variables
  price = signal(100);
  quantity = signal(3);
}
