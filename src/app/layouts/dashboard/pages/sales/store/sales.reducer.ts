import { createFeature, createReducer, on } from '@ngrx/store';
import { SalesActions } from './sales.actions';
import { Sale } from '../models';

export const salesFeatureKey = 'sales';

export interface State {
  sales: Sale[];
  loading: boolean;
  error: unknown;
}

export const initialState: State = {
  sales: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(SalesActions.loadSales, (state) => ({ ...state, loading: true })),
  on(SalesActions.loadSalesSuccess, (state, action) => ({
    ...state,
    loading: false,
    sales: action.data,
  })),
  on(SalesActions.loadSalesFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))
);

export const salesFeature = createFeature({
  name: salesFeatureKey,
  reducer,
});
