import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SalesActions } from '../../store/sales.actions';
import { Observable } from 'rxjs';
import { User } from '../../../users/models';
import {
  selectSalesBuyers,
  selectSalesProducts,
} from '../../store/sales.selectors';
import { Product } from '../../../products/models';

@Component({
  selector: 'app-sale-dialog',
  templateUrl: './sale-dialog.component.html',
  styleUrl: './sale-dialog.component.scss',
})
export class SaleDialogComponent {
  buyers$: Observable<User[]>;
  products$: Observable<Product[]>;

  constructor(private store: Store) {
    this.store.dispatch(SalesActions.loadBuyers());
    this.store.dispatch(SalesActions.loadProducts());

    this.products$ = this.store.select(selectSalesProducts);
    this.buyers$ = this.store.select(selectSalesBuyers);
  }
}
