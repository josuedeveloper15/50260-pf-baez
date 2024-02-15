import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';

/// ACCIONES AGRUPADAS

export const ContadorActions = createActionGroup({
  source: 'Contador',
  events: {
    incrementar: emptyProps(),
    decrementar: props<{ cantidad: number }>(),
    // 'login': props<{ email: string; password: string }>();
  },
});

/// ACCIONES INDIVIDUALES

// export const incrementar = createAction('incrementar');
// export const decrementar = createAction(
//   'decrementar',
//   props<{ cantidad: number }>()
// );
