import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { SalesActions } from './sales.actions';
import { SalesService } from '../sales.service';

@Injectable()
export class SalesEffects {
  loadSales$ = createEffect(() => {
    return this.actions$.pipe(
      // Filtramos solamente las acciones que nos interesan, en este caso solamente las acciones de tipo loadSaless
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

  constructor(private actions$: Actions, private salesService: SalesService) {}
}
