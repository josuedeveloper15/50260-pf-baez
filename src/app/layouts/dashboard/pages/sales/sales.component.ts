import { Component } from '@angular/core';
import { SalesService } from './sales.service';
import { Store } from '@ngrx/store';
import { SalesActions } from './store/sales.actions';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
})
export class SalesComponent {
  sales$: any;

  constructor(private salesService: SalesService, private store: Store) {
    this.sales$ = this.salesService.getSales();

    this.store.dispatch(SalesActions.loadSales());
  }
}
