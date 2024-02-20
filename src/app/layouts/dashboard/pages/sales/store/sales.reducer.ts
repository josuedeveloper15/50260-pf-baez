import { createFeature, createReducer, on } from '@ngrx/store';
import { SalesActions } from './sales.actions';

export const salesFeatureKey = 'sales';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(SalesActions.loadSales, (state) => state),
  on(SalesActions.loadSalesSuccess, (state, action) => state),
  on(SalesActions.loadSalesFailure, (state, action) => state)
);

export const salesFeature = createFeature({
  name: salesFeatureKey,
  reducer,
});
