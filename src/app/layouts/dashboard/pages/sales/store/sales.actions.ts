import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const SalesActions = createActionGroup({
  source: 'Sales',
  events: {
    'Load Sales': emptyProps(),
    'Load Sales Success': props<{ data: unknown }>(),
    'Load Sales Failure': props<{ error: unknown }>(),
  },
});
