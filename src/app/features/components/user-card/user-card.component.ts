import { Component, computed, EventEmitter, Input, input, Output, signal } from '@angular/core';

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

  @Output() greetings = new EventEmitter<string>();
  

  toggleExpand() {
    this.isExpanded.update((v) => !v);
  }

  transformName(name: string | undefined): string {
    return name?.trim() ?? '';
  }

  sendGreetings(): void {
    this.greetings.emit(`Hello from ${this.name()}`);
  }
}
