import { Component, computed, viewChild, viewChildren } from '@angular/core';
import { CardHeaderComponent } from '../card-header/card-header.component';
import { CardActionComponent } from "../card-action/card-action.component";

@Component({
  selector: 'app-custom-card',
  imports: [CardHeaderComponent, CardActionComponent],
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.css',
})
export class CustomCardComponent {
  header = viewChild(CardHeaderComponent);
  headerText = computed(() => this.header()?.text);

  actions = viewChildren(CardActionComponent);
  actionTexts = computed(() => this.actions().map(action => action.text));
}
