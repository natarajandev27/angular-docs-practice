import { Component, inject, ViewContainerRef } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-notify-button',
  imports: [],
  templateUrl: './notify-button.component.html',
  styleUrl: './notify-button.component.css',
})
export class NotifyButtonComponent {
  private viewContainer = inject(ViewContainerRef);

  showNotifications() {
    this.viewContainer.clear();
    this.viewContainer.createComponent(NotificationComponent);
  }
}
