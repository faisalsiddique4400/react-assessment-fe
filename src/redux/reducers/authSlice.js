import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: '',
  currentBrand: '',
  currentCompany: '',
  currentShop: '',
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
    },
    loginFailed: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    },
    UpdateBrand: (state, { payload }) => {
      state.currentBrand = payload;
    },
    UpdateCompany: (state, { payload }) => {
      state.currentCompany = payload;
    },
    UpdateShop: (state, { payload }) => {
      state.currentShop = payload;
    },
  },
});

const { reducer, actions } = AuthSlice;

export const {
  loginPending,
  loginSuccess,
  loginFailed,
  UpdateBrand,
  UpdateShop,
  UpdateCompany,
} = actions;

export default reducer;
