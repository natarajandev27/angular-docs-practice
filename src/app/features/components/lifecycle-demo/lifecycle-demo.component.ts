import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-lifecycle-demo',
  imports: [],
  templateUrl: './lifecycle-demo.component.html',
  styleUrl: './lifecycle-demo.component.css',
})
export class LifecycleDemoComponent implements OnInit, OnChanges {
  @Input() name = '';

  timer = 0;
  private timerSubscription!: Subscription;

  constructor() {
    console.log('constructor - Name:' + this.name);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges - Name:' + this.name);
    console.log('onchanges - current value:' + changes['name'].currentValue);
    console.log('onchanges - previous value:' + changes['name'].previousValue);
    console.log('onchanges - first change:' + changes['name'].firstChange);
  }

  ngOnInit() {
    console.log('ngOnInit - Name:' + this.name);

    this.timerSubscription = interval(1000).subscribe((count) => {
      this.timer = count;
      // console.log('Timer:' + this.timer);
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
    console.log('Timer unsubscribed');
  }
}
