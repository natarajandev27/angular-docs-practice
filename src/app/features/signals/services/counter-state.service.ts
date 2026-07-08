import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterStateService {
  private readonly _count = signal(0);

  readonly count = this._count.asReadonly();

  increment() {
    this._count.update((count) => count + 1);
  }
}
