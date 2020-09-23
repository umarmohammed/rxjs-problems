import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CacheingComponent } from './cacheing.component';

const routes: Routes = [{ path: 'cacheing', component: CacheingComponent }];

@NgModule({
  declarations: [AppComponent, CacheingComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
