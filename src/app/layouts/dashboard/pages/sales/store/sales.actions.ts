import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Sale } from '../models';

export const SalesActions = createActionGroup({
  source: 'Sales',
  events: {
    'Load Sales': emptyProps(),
    'Load Sales Success': props<{ data: Sale[] }>(),
    'Load Sales Failure': props<{ error: unknown }>(),
  },
});
