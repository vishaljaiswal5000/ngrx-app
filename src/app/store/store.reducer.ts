import { Action, createReducer, on } from '@ngrx/store';
import { decrease, increase, reset } from './store.action';

// current or inital value
export const initalState = { count: 0 };

// creating reducer
// Initial state and ons: association between action and states.
// Returns reducer function
const _createReducer = createReducer(
  initalState,
  on(increase, (state) => increment(state)),
  on(decrease, (state) => decrement(state)),
  on(reset, (state) => res(state))
);

// Reducer with state and type of action
export function storeReducer(state: any, action: Action) {
  console.log('state', state);
  console.log('action', action);
  return _createReducer(state, action);
}

// Logic function
function increment(state: any) {
  state = { count: state.count + 1 };
  return state;
}

function decrement(state: any) {
  state = { count: state.count - 1 };
  return state;
}

function res(state: any) {
  state = { count: 0 };
  return state;
}
