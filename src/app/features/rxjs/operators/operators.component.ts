import { Component } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  catchError,
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
  Observable,
  of,
  ReplaySubject,
  retry,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-operators',
  imports: [HeaderComponent, ProfileComponent],
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
  // constructor() {
  //   // this.testForkJoin();
  //   // this.testCombineLatest();
  //   this.testMerge();
  // }
  // testForkJoin() {
  //   const call1$ = of('User data').pipe(delay(1000));
  //   const call2$ = of('Posts data').pipe(delay(1000));
  //   const call3$ = of('Settings data').pipe(delay(1000));
  //   console.log('Starting all 3 calls...');
  //   forkJoin({
  //     user: call1$,
  //     post: call2$,
  //     settings: call3$,
  //   }).subscribe((result) => {
  //     console.log('All done:', result);
  //   });
  // }
  // testCombineLatest() {
  //   const price$ = new Subject<number>();
  //   const quantity$ = new Subject<number>();
  //   combineLatest([price$, quantity$]).subscribe(([price, quantity]) => {
  //     console.log('Total:', price * quantity);
  //   });
  //   console.log('Emitting price = 10');
  //   price$.next(10);
  //   console.log('Emitting quantity = 2');
  //   quantity$.next(2);
  //   console.log('Emitting quantity = 15');
  //   price$.next(15);
  // }
  // testMerge() {
  //   const buttonClick$ = new Subject<string>();
  //   const enterKeyPress$ = new Subject<string>();
  //   merge(buttonClick$, enterKeyPress$).subscribe((source) => {
  //     console.log('Triggered by:', source);
  //   });
  //   console.log('Simulating button click');
  //   buttonClick$.next('button');
  //   console.log('Simulating Enter key press');
  //   enterKeyPress$.next('enter key');
  //   console.log('Simulating another button click');
  //   buttonClick$.next('button');
  // }

  // Subjects
  constructor() {
    // this.testSubjectTypes();
    this.testErrorHandling();
  }

  // testSubjectTypes() {
  //   const plain$ = new Subject<number>();
  //   plain$.next(1);
  //   plain$.next(2);
  //   console.log('--- Plain Subject: subscribing LATE ---');
  //   plain$.subscribe((val) => console.log('Plain got:', val));
  //   plain$.next(3);

  //   const behavior$ = new BehaviorSubject<number>(0);
  //   behavior$.next(1);
  //   behavior$.next(2);
  //   console.log('--- BehaviorSubject Subject: subscribing LATE ---');
  //   behavior$.subscribe((val) => console.log('BehaviorSubject got:', val));
  //   behavior$.next(3);

  //   const replay$ = new ReplaySubject<number>(1);
  //   replay$.next(1);
  //   replay$.next(2);
  //   replay$.next(3);
  //   console.log('--- ReplaySubject Subject: subscribing LATE ---');
  //   replay$.subscribe((val) => console.log('ReplaySubject got:', val));

  //   const async$ = new AsyncSubject<number>();
  //   console.log('--- ReplaySubject Subject: subscribing LATE ---');
  //   async$.subscribe((val) => console.log('Async got:', val));
  //   async$.next(1);
  //   async$.next(2);
  //   async$.next(3);
  //   console.log('--- Calling complete() now ---');
  //   async$.complete();
  // }

  testErrorHandling() {
    const flaky$ = new Observable((subscriber) => {
      console.log('Attempting call...');
      subscriber.error('Simulated  network failure');
    });

    flaky$
      .pipe(
        retry(2),
        catchError((err) => {
          console.log('Final catch:', err);
          return of('Fallback data');
        }),
      )
      .subscribe((result) => console.log('GOT:', result));
  }
}
