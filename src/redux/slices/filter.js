// import { createSlice } from '@reduxjs/toolkit';

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     filterContacts: (state, action) => action.payload,
//   },
// });

// export const { filterContacts } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts: (_, { payload }) =>
      // state.filter = action.payload;
      payload,
  },
});

export const { filterContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;