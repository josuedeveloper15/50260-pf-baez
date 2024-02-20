import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSales from './sales.reducer';

export const selectSalesState = createFeatureSelector<fromSales.State>(
  fromSales.salesFeatureKey
);
