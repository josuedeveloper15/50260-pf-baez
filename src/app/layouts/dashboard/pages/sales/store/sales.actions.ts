import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateSaleData, Sale } from '../models';
import { User } from '../../users/models';
import { Product } from '../../products/models';

export const SalesActions = createActionGroup({
  source: 'Sales',
  events: {
    'Load Sales': emptyProps(),
    'Load Sales Success': props<{ data: Sale[] }>(),
    'Load Sales Failure': props<{ error: unknown }>(),
    'Load Buyers': emptyProps(),
    'Load Buyers Success': props<{ data: User[] }>(),
    'Load Buyers Failure': props<{ error: unknown }>(),
    'Load Products': emptyProps(),
    'Load Products Success': props<{ data: Product[] }>(),
    'Load Products Failure': props<{ error: unknown }>(),
    'Create Sale': props<{ data: CreateSaleData }>(),
    'Create Sale Success': props<{ data: Sale }>(),
    'Create Sale Failure': props<{ error: unknown }>(),
  },
});
