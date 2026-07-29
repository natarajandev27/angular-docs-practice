import { Component } from '@angular/core';
import {
  combineLatest,
  concatMap,
  debounceTime,
  delay,
  distinctUntilChanged,
  exhaustMap,
  forkJoin,
  map,
  merge,
  mergeMap,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-operators',
  imports: [],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css',
})
export class OperatorsComponent {
  // serachTerms$ = new Subject<string>();

  // constructor() {
  //   this.serachTerms$
  //     .pipe(
  //       // debounceTime(300),
  //       // distinctUntilChanged(),
  //       switchMap((term) => {
  //         console.log('Starting fake API call for:', term);
  //         const randomDelay = Math.floor(Math.random() * 1500) + 200; // random 200-1700ms
  //         return of(`Result for "${term}"`).pipe(delay(randomDelay));
  //       }),
  //     )
  //     .subscribe((result) => console.log('Got:', result));
  // }

  // onType(event: Event) {
  //   const value = (event.target as HTMLInputElement).value;
  //   this.serachTerms$.next(value);
  // }

  // private buttonClick$ = new Subject<void>();

  // constructor() {
  //   this.buttonClick$
  //     .pipe(
  //       exhaustMap(() => {
  //         console.log('Starting fake login call...');
  //         return of('Login success').pipe(delay(2000));
  //       }),
  //     )
  //     .subscribe((result) => console.log('GOT:', result));
  // }

  // onClick() {
  //   this.buttonClick$.next();
  // }

  // testMapAndTap() {
  //   of(1, 2, 3)
  //     .pipe(
  //       tap((val) => console.log('Before map:', val)),
  //       map((val) => val * 10),
  //       tap((val) => console.log('After map:', val)),
  //     )
  //     .subscribe((finalVal) => console.log('Subscribed value:', finalVal));
  // }

  // Combination Operators
  constructor() {
    // this.testForkJoin();
    // this.testCombineLatest();
    this.testMerge();
  }

  testForkJoin() {
    const call1$ = of('User data').pipe(delay(1000));
    const call2$ = of('Posts data').pipe(delay(1000));
    const call3$ = of('Settings data').pipe(delay(1000));

    console.log('Starting all 3 calls...');

    forkJoin({
      user: call1$,
      post: call2$,
      settings: call3$,
    }).subscribe((result) => {
      console.log('All done:', result);
    });
  }

  testCombineLatest() {
    const price$ = new Subject<number>();
    const quantity$ = new Subject<number>();

    combineLatest([price$, quantity$]).subscribe(([price, quantity]) => {
      console.log('Total:', price * quantity);
    });

    console.log('Emitting price = 10');
    price$.next(10);

    console.log('Emitting quantity = 2');
    quantity$.next(2);

    console.log('Emitting quantity = 15');
    price$.next(15);
  }

  testMerge() {
    const buttonClick$ = new Subject<string>();
    const enterKeyPress$ = new Subject<string>();

    merge(buttonClick$, enterKeyPress$).subscribe((source) => {
      console.log('Triggered by:', source);
    });

    console.log('Simulating button click');
    buttonClick$.next('button');

    console.log('Simulating Enter key press');
    enterKeyPress$.next('enter key');

    console.log('Simulating another button click');
    buttonClick$.next('button');
  }
}
