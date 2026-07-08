import {
  Component,
  computed,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { CounterStateService } from '../services/counter-state.service';

@Component({
  selector: 'app-signals-demo',
  imports: [],
  templateUrl: './signals-demo.component.html',
  styleUrl: './signals-demo.component.css',
})
export class SignalsDemoComponent {
  state = inject(CounterStateService);
  count = this.state.count;
  doubleCount = computed(() => {
    // console.log('count' + this.count());
    return this.count() * 2;
  });
  showDouble = signal(true);
  conditionalValue = computed(() => {
    // console.log('conditional ran', this.showDouble());
    return this.showDouble() ? this.count() * 2 : 0;
  });

  increment() {
    this.state.increment();
  }

  celsius = signal(0);
   fahrenheit = this.celsius() * 9/5 + 32;
  //Effects
  constructor() {
    effect(() => {
      console.log('Effect ran| count:' + this.count());
      console.log('Temp changed: X°C = Y°F')
    });
  }

  //Reactive Context
  watchedRead = computed(() => {
    // console.log('Watch zone ran, count = ' + this.count());
    return this.count();
  });

  unwatchedRead() {
    // console.log('Outside watch zone', +this.count());
    return this.count();
  }

  //Untracked
  other = signal(100);

  trackTest = computed(() => {
    const c = this.count();
    const o = untracked(this.other);
    // console.log('trackTest ran | count:', c, '| other:', o);
    return c + o;
  });

  
}
