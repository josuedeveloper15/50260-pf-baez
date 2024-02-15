import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContadorState, featureName } from '../reducers';

export const selectContadorState =
  createFeatureSelector<ContadorState>(featureName);

export const selectContadorValue = createSelector(
  selectContadorState,
  (state) => state.value
);
