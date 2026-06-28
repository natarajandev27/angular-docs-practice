import { Component, computed, Input, input, signal } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  name = input('', { transform: this.transformName });
  welcomeMessage = computed(() => `Welcome ${this.name()}`);

  @Input({ required: true }) age!: number;
  isExpanded = signal(false);

  toggleExpand() {
    this.isExpanded.update((v) => !v);
  }

  transformName(name: string | undefined): string {
    return name?.trim() ?? '';
  }
}
