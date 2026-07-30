import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [AsyncPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  userService = inject(UserService);

  onClick() {
    this.userService.login('Natarajan');
  }
}
