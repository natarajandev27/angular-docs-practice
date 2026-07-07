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
import { SpecialCardActionComponent } from '../special-card-action/special-card-action.component';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';
import { NotifyButtonComponent } from "../notify-button/notify-button.component";

@Component({
  selector: 'app-parent-demo',
  imports: [
    UserCardComponent,
    HostDemoComponent,
    LifecycleDemoComponent,
    CustomCardComponent,
    BoxComponent,
    StarComponent,
    SpecialCardActionComponent,
    CustomDialogComponent,
    NotifyButtonComponent
],
  templateUrl: './parent-demo.component.html',
  styleUrl: './parent-demo.component.css',
})
export class ParentDemoComponent {
  name = 'Natarajan';
  age = 30;
  message = '';
  inputRef = viewChild('input', { read: ElementRef });
  isAdmin = false;

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

  onToggle() {
    this.isAdmin = !this.isAdmin;
  }
}
