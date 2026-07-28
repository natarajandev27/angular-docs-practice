import { Component } from '@angular/core';
import {
  concatMap,
  debounceTime,
  delay,
  distinctUntilChanged,
  exhaustMap,
  map,
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
  serachTerms$ = new Subject<string>();

  constructor() {
    this.serachTerms$
      .pipe(
        // debounceTime(300),
        // distinctUntilChanged(),
        switchMap((term) => {
          console.log('Starting fake API call for:', term);
          const randomDelay = Math.floor(Math.random() * 1500) + 200; // random 200-1700ms
          return of(`Result for "${term}"`).pipe(delay(randomDelay));
        }),
      )
      .subscribe((result) => console.log('Got:', result));
  }

  onType(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.serachTerms$.next(value);
  }

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
}
