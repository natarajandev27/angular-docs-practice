import { Component, computed, contentChild } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-box',
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
})
export class BoxComponent {
  star = contentChild(StarComponent);
  starMessage = computed(() => this.star()?.message);
}
