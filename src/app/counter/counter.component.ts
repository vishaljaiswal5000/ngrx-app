import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increase, decrease, reset } from '../store/store.action';
import { countSelector } from '../store/store.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  count: any;
  constructor(private store: Store<{ myCountState: any }>) {
    // this.count$ = this.store.select('myCountState');
    // this.store
    //   .select('myCountState')
    //   .subscribe((res) => (this.count = res.count));

    this.store.select(countSelector).subscribe((res) => {
      this.count = res.count;
    });
  }

  ngOnInit(): void {}

  increment() {
    this.store.dispatch(increase());
  }
  decrement() {
    this.store.dispatch(decrease());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
