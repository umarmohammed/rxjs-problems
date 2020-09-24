import { Injectable } from '@angular/core';
import { timer, Subject, BehaviorSubject, Observable, defer } from 'rxjs';
import { take, map, switchMap, tap, shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FooService {
  private cache = {};
  private fooSubject = new Subject<number>();
  fooLoading$ = new BehaviorSubject<boolean>(false);
  foo$ = this.fooSubject.asObservable().pipe(
    switchMap((id) => {
      if (!this.cache[id]) {
        this.cache[id] = this.doFetch(this.getFooById(id)).pipe(shareReplay());
      }
      return this.cache[id];
    })
  );

  fooSelected(id: number) {
    this.fooSubject.next(id);
  }

  doFetch(actualFetch$: Observable<string>) {
    return defer(() => {
      this.fooLoading$.next(true);
      return actualFetch$.pipe(tap(() => this.fooLoading$.next(false)));
    });
  }

  private getFooById(id: number) {
    return timer(2_000).pipe(
      map(() => `foo ${id}`),
      take(1)
    );
  }
}
