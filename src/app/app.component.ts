import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilePhotoComponent } from './features/components/profile-photo/profile-photo.component';
import { HighlightBoxComponent } from './features/components/highlight-box/highlight-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfilePhotoComponent, HighlightBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-docs-practice';
}
