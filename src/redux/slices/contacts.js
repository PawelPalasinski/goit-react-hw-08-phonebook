// import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [addContact.pending]: handlePending,
//     [deleteContact.pending]: handlePending,
//     [fetchContacts.rejected]: handleRejected,
//     [addContact.rejected]: handleRejected,
//     [deleteContact.rejected]: handleRejected,
//     [fetchContacts.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = payload;
//     },
//     [addContact.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = [...state.items, payload];
//     },
//     [deleteContact.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(task => task.id === payload);
//       state.items.splice(index, 1);
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;
