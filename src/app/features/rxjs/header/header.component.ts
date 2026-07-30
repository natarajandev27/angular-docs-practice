import { AsyncPipe } from '@angular/common';
import { UserService } from './../user.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  userService = inject(UserService);

  onClick() {
    this.userService.login('Natarajan');
  }
}
