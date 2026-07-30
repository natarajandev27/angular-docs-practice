import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private currentUsers$ = new BehaviorSubject<string | null>(null);

  user$ = this.currentUsers$.asObservable();

  login(name: string) {
    this.currentUsers$.next(name);
  }

  logout() {
    this.currentUsers$.next(null);
  }
}
