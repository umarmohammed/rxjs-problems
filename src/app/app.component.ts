import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="cacheing">Cacheing</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
