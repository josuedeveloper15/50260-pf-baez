import { contadorReducer, featureName } from './contador/reducers';

export const appReducers = {
  [featureName]: contadorReducer,
};
