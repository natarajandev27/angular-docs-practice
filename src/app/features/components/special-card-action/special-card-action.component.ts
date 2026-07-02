import { Component, input, OnInit } from '@angular/core';
import { CardActionComponent } from '../card-action/card-action.component';

@Component({
  selector: 'app-special-card-action',
  imports: [],
  templateUrl: './special-card-action.component.html',
  styleUrl: './special-card-action.component.css',
})
export class SpecialCardActionComponent
  extends CardActionComponent
  implements OnInit
{
  icon = input('⭐');

  override ngOnInit() {
    this.text = 'Super text';
  }
}
