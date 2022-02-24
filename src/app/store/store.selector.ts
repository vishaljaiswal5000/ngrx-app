import { createSelector } from '@ngrx/store';

export const allCount = (state: any) => {
  console.log('in selector', state);
  return state;
};

export const countSelector = createSelector(allCount, (state: any) => {
  return state.myCountState;
});
