import { NgComponentOutlet } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { AdminBioComponent } from '../admin-bio/admin-bio.component';
import { StandardBioComponent } from '../standard-bio/standard-bio.component';

@Component({
  selector: 'app-custom-dialog',
  imports: [NgComponentOutlet],
  templateUrl: './custom-dialog.component.html',
  styleUrl: './custom-dialog.component.css',
})
export class CustomDialogComponent {
  username = input.required<string>();
  isAdmin = input(false);
  userInputs = computed(() => ({
    username: this.username(),
  }));

  getBioComponent() {
    return this.isAdmin() ? AdminBioComponent : StandardBioComponent;
  }
}
