import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-profile-photo',
    imports: [],
    templateUrl: './profile-photo.component.html',
    styleUrl: './profile-photo.component.css'
})
export class ProfilePhotoComponent {
  count = 0;
  signalCount = signal(0);

  ngOnInit() {
    setTimeout(() => {
      this.count = 5;
      this.signalCount.set(5);
      console.log(this.count);
      console.log(this.signalCount());
    }, 2000);
  }
}
