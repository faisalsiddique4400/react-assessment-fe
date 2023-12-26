import { configureStore } from '@reduxjs/toolkit';

/* reducers */
import AuthReducer from './reducers/authSlice';
import RecipeReducer from './reducers/recipeSlice';

export const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    Recipe: RecipeReducer,
  },
});
