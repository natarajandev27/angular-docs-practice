import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { TruncatePipe } from './truncate.pipe';
import { ListJoinPipe } from './list-join.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    UpperCasePipe,
    JsonPipe,
    SlicePipe,
    TruncatePipe,
    ListJoinPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
  name = 'Natarajan';
  user = { id: 1, role: 'admin' };
  longText =
    'Angular signals and pipes are genuinely useful once you build them yourself';

  // Pure and Impure pipes
  items = ['Apple', 'Banana'];

  mutate() {
    this.items.push('Cherry');
  }

  replace() {
    this.items = [...this.items, 'Cherry'];
  }
}
