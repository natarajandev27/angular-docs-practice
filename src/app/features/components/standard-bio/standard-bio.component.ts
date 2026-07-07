import { Component, input } from '@angular/core';

@Component({
  selector: 'app-standard-bio',
  imports: [],
  templateUrl: './standard-bio.component.html',
  styleUrl: './standard-bio.component.css',
})
export class StandardBioComponent {
  username = input.required<string>();
}
