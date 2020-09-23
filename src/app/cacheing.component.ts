import { Component } from '@angular/core';
import { Subscription, Observable, timer } from 'rxjs';
import { FooService } from './foo.service';

@Component({
  selector: 'app-cacheing',
  template: `
    <h3>How to cache observables?</h3>
    <div>
      <button
        *ngFor="let fooId of fooIds"
        (click)="foo.fooSelected(fooId)"
        class="m-6"
      >
        {{ fooId }}
      </button>
    </div>
    <div [class.hide]="foo.fooLoading$ | async">
      {{ foo.foo$ | async }}
    </div>
    <div *ngIf="foo.fooLoading$ | async">Loading....</div>
  `,
  styles: [
    `
      .m-6 {
        margin: 6px;
      }

      .hide {
        display: none;
      }
    `,
  ],
})
export class CacheingComponent {
  fooIds = [1, 2, 3, 4, 5];

  constructor(public foo: FooService) {}
}
