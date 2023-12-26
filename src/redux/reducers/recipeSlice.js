import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipeTypes: [],
  ingredientsRecipe: [],
  selectedDatabase: 'My Market List',
  disableBrand: false,
};

const RecipeSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setRecipeTypes: (state, { payload }) => {
      state.recipeTypes = payload;
    },

    setRecipeIngredients: (state, { payload }) => {
      state.ingredientsRecipe = payload;
    },

    setDatabaseIngredient: (state, { payload }) => {
      state.selectedDatabase = payload;
    },

    setDisableBrand: (state, { payload }) => {
      state.disableBrand = payload;
    },
  },
});

const { reducer, actions } = RecipeSlice;

export const {
  setRecipeTypes,
  setRecipeIngredients,
  setDatabaseIngredient,
  setDisableBrand,
} = actions;

export default reducer;
