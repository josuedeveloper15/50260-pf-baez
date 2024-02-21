import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSales from './sales.reducer';

export const selectSalesState = createFeatureSelector<fromSales.State>(
  fromSales.salesFeatureKey
);

export const selectSales = createSelector(
  selectSalesState,
  (state) => state.sales
);

export const selectSalesIsLoading = createSelector(
  selectSalesState,
  (state) => state.loading
);

export const selectSalesBuyers = createSelector(
  selectSalesState,
  (state) => state.buyers
);

export const selectSalesProducts = createSelector(
  selectSalesState,
  (state) => state.products
);
