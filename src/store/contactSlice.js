import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleReject = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: bilder => {
    bilder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })

      .addCase(addContacts.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
      })

      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleReject);
  },
  // reducers: {
  //   addContact: (state, action) => {
  //     state.contacts.unshift({
  //       id: nanoid(),
  //       ...action.payload,
  //     });
  //   },
  //   removeContact: (state, action) => {
  //     state.contacts = state.contacts.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },
});

export const { addContact, removeContact } = contactSlice.actions;

export default contactSlice.reducer;
