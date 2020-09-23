import { Injectable } from '@angular/core';
import { timer, Subject, BehaviorSubject } from 'rxjs';
import { take, map, switchMap, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FooService {
  private fooSubject = new Subject<number>();
  fooLoading$ = new BehaviorSubject<boolean>(false);
  foo$ = this.fooSubject.asObservable().pipe(
    tap(() => this.fooLoading$.next(true)),
    switchMap(this.getFooById),
    tap(() => this.fooLoading$.next(false))
  );

  fooSelected(id: number) {
    this.fooSubject.next(id);
  }

  private getFooById(id: number) {
    return timer(2_000).pipe(
      map(() => `foo ${id}`),
      take(1)
    );
  }
}
