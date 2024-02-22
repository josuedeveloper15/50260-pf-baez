import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { SalesActions } from './sales.actions';
import { SalesService } from '../sales.service';
import { UsersService } from '../../users/users.service';
import { ProductsService } from '../../products/products.service';

@Injectable()
export class SalesEffects {
  loadSales$ = createEffect(() => {
    return this.actions$.pipe(
      // Filtramos solamente las acciones que nos interesan, en este caso solamente las acciones de tipo loadSales
      ofType(SalesActions.loadSales),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.salesService.getSales().pipe(
          // AQUI MANEJAMOS EL SUCCESS
          map((data) => SalesActions.loadSalesSuccess({ data })),
          // CATCH ERROR PARA ATRAPAR UN ERROR SI LO HUBIESE
          catchError((error) => of(SalesActions.loadSalesFailure({ error })))
        )
      )
    );
  });

  loadBuyer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SalesActions.loadBuyers),
      concatMap(() =>
        this.usersService.getAllBuyers().pipe(
          map((resp) => SalesActions.loadBuyersSuccess({ data: resp })),
          catchError((error) => {
            return of(SalesActions.loadBuyersFailure({ error }));
          })
        )
      )
    );
  });

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SalesActions.loadProducts),
      concatMap(() => {
        return this.productsService.getProducts().pipe(
          map((resp) => SalesActions.loadProductsSuccess({ data: resp })),
          catchError((error) => of(SalesActions.loadProductsFailure({ error })))
        );
      })
    );
  });

  createSale$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SalesActions.createSale),
      concatMap((action) => {
        return this.salesService.createSale(action.data).pipe(
          map((resp) => SalesActions.createSaleSuccess({ data: resp })),
          catchError((error) => of(SalesActions.createSaleFailure({ error })))
        );
      })
    );
  });

  createSaleSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SalesActions.createSaleSuccess),
      map(() => SalesActions.loadSales())
    );
  });

  // loadSalesSucessOrFailure$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(SalesActions.loadSalesSuccess, SalesActions.loadSalesFailure),
  //     concatMap((action) => {
  //       ///
  //     })
  //   );
  // });

  constructor(
    private actions$: Actions,
    private salesService: SalesService,
    private usersService: UsersService,
    private productsService: ProductsService
  ) {}
}
