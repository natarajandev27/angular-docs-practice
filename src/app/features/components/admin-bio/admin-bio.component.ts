import { Component, input } from '@angular/core';

@Component({
  selector: 'app-admin-bio',
  imports: [],
  templateUrl: './admin-bio.component.html',
  styleUrl: './admin-bio.component.css',
})
export class AdminBioComponent {
  username = input.required<string>();
}
