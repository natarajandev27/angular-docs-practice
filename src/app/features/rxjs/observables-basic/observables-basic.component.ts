import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  from,
  interval,
  Observable,
  of,
  Subject,
  Subscription,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-observables-basic',
  imports: [],
  templateUrl: './observables-basic.component.html',
  styleUrl: './observables-basic.component.css',
})
export class ObservablesBasicComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  private destroy$ = new Subject<void>();

  constructor() {
    // this.testManualObservable();
    // this.testLaziness();
    // this.testOfVsFrom();
    this.testColdObservable();
  }

  ngOnInit() {
    // this.sub = interval(1000).subscribe((val) => console.log(val));
    // interval(1000)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((val) => console.log('A: ' + val));
    // interval(2000)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((val) => console.log('B:', val));
  }

  testManualObservable() {
    const number$ = new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    });

    number$.subscribe((val) => console.log('Got:', val));
  }

  testLaziness() {
    console.log('Before creating observables');

    const source$ = new Observable((subscriber) => {
      console.log('Inside Observable constructor - this runs on subscribe');
      subscriber.next('Hello');
    });

    console.log('Before calling .subscribe()');

    source$.subscribe((val) => console.log('Subscribed value:', val));
  }

  testOfVsFrom() {
    console.log('--- of(1, 2, 3) ---');
    of(1, 2, 3).subscribe((val) => console.log('of value:', val));

    console.log('--- from([1, 2, 3]) ---');
    from([1, 2, 3]).subscribe((val) => console.log('from array value:', val));

    console.log('--- of([1, 2, 3]) ---');
    of([1, 2, 3]).subscribe((val) => console.log('of array value:', val));
  }

  testColdObservable() {
    const cold$ = new Observable<number>((subscriber) => {
      console.log('Producer started - generating a fresh timestamp');
      subscriber.next(Date.now());
    });

    console.log('--- First subscription ---');
    cold$.subscribe((val) => console.log('Subscriber A got:', val));

    console.log('--- Second subscription ---');
    cold$.subscribe((val) => console.log('Subscriber B got:', val));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();

    this.destroy$.next();
    this.destroy$.complete();
  }
}
