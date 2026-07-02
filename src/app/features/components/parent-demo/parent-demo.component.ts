import {
  afterNextRender,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { HostDemoComponent } from '../host-demo/host-demo.component';
import { LifecycleDemoComponent } from '../lifecycle-demo/lifecycle-demo.component';
import { CustomCardComponent } from '../custom-card/custom-card.component';
import { BoxComponent } from '../box/box.component';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-parent-demo',
  imports: [
    UserCardComponent,
    HostDemoComponent,
    LifecycleDemoComponent,
    CustomCardComponent,
    BoxComponent,
    StarComponent,
  ],
  templateUrl: './parent-demo.component.html',
  styleUrl: './parent-demo.component.css',
})
export class ParentDemoComponent {
  name = 'Natarajan';
  age = 30;
  message = '';
  inputRef = viewChild('input', { read: ElementRef });

  constructor() {
    afterNextRender(() => {
      this.inputRef()?.nativeElement.focus();
    });
  }

  welcomeMessage(greeting: string) {
    this.message = greeting;
  }

  changeName() {
    this.name = 'Sailachu';
  }
}
