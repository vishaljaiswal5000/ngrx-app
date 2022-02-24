import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// store import
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store/store.reducer';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ myCountState: storeReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
