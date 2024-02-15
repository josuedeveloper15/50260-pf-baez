import {
  contadorReducer,
  featureName as contadorFeatureName,
} from './contador/reducers';
import { featureName as authFeatureName, authReducer } from './auth/reducers';

export const appReducers = {
  [contadorFeatureName]: contadorReducer,
  [authFeatureName]: authReducer,
};
